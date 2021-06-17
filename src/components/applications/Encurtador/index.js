import React from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Typography, TextField, FormControlLabel, Checkbox } from '@material-ui/core/';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Encurtar Link', 'Personalização', 'Finalizar'];
}

function getStepContent(step, setLink, setSlug) {
    switch (step) {
        case 0:
            return (
                <TextField
                    label="Encurtar link longo"
                    style={{ margin: 8, width: '100%' }}
                    helperText="Cole aqui o seu link"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => setLink(e.target.value)}
                />);
        case 1:
            return (
                <TextField
                    label="Personalize o seu link"
                    style={{ margin: 8, width: '100%' }}
                    helperText="Deixe o link do jeito que precisa"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => setSlug(e.target.value)}
                />
            );
        case 2:
            return (
                <div>
                    <FormControlLabel
                        value="rastrear"
                        control={<Checkbox color="primary" />}
                        label="Rastrear"
                        checked='true'
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="monetizar"
                        control={<Checkbox color="primary" />}
                        label="Monetizar"
                        labelPlacement="end"
                    />
                </div>
            );
        default:
            return 'Unknown step';
    }
}

export default function HorizontalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [link, setLink] = React.useState('')
    const [slug, setSlug] = React.useState('');
    const steps = getSteps();

    const shortenLink = () => {
        Axios.post('https://adbit-app.herokuapp.com/api/links/novoLink', {
            url: link,
        },
            {
                headers: {
                    adbitAcessToken: localStorage.getItem('token'),
                }
            });
        handleNext()
    };

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("Você não pode pular uma etapa que não seja opcional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Opcional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            Link criado com Sucesso
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Criar outro link
                        </Button>
                    </div>
                    ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep, setLink, setSlug)}</Typography>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Voltar
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                    className={classes.button}
                                >
                                    Pular
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={activeStep === steps.length - 1? shortenLink : handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

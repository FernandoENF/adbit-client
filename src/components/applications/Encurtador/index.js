import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios'



var host = process.env.REACT_APP_ROOT_PATH


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
    return ['Encurtar Link', 'Configurações adicionais', 'Finalizar'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <TextField
                    label="Encurtar link"
                    style={{ margin: 8, width: '100%' }}
                    helperText="Cole aqui o seu link"
                    margin="normal"
                    InputLabelProps={{ shrink: true, }}
                    onChange={e => this.setState({ link: e.target.value })}
                />);
        case 1:
            return 'Quais alterações?';
        case 2:
            return (
                <span>{this.state.encurtado}</span>
            );
        default:
            return 'Algo deu errado';
    }
}

export default function HorizontalLinearStepper() {
    const encurtar = () => {
        Axios.post('https://adbit-app.herokuapp.com/api/links/novoLink', {
            url: this.state.link,
        },
            {
                headers: {
                    adbitAcessToken: localStorage.getItem('token'),
                }
            }).then((response) => {
                this.setState({
                    encurtado: process.env.REACT_APP_ROOT_PATH + '/' + response.data.message
                })
            });
    }

    const handleSubmit = e => {
        e.preventDefault();
    };

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

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
                            Todas as etapas concluídas - você terminou
            </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Criar outro link
            </Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
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
                                onClick={handleNext}
                                className={classes.button}
                                onClick={encurtar}
                            >
                                {activeStep === steps.length - 1 ? 'Finalizar' : 'Proximo'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

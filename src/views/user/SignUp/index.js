import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';




const options = [
    'Instagram',
    'Facebook',
    'Twitter',
    'Linkedin',
    'Email Marketing',
    'Site/Blog',
    'Outros',
    'Nenhuma',
];

function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={open}
            {...other}
        >
            <DialogTitle id="confirmation-dialog-title">De onde vem os cliques?</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="ringtone"
                    name="ringtone"
                    value={value}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleOk} color="primary">
                    Ok
          </Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUpSide() {
    const classes = useStyles();

    Axios.defaults.withCredentials = true;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const signUp = () => {
        Axios.post('https://adbit-app.herokuapp.com/api/register', {
            name: name,
            email: email,
            company: company,
            password: password
        }).then((response) => {
            alert(response.data.message)
            history.push("/sign-in");
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
    };

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Selecionar');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
            setCompany(newValue);
        }
    };




    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Crie sua conta gratuitamente
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={(e) => handleSubmit(e)}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="nome"
                            label="Primeiro nome"
                            name="nome"
                            autoComplete="nome"
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Seu E-mail"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Sua senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <List component="div" role="list">
                            <ListItem
                                button
                                divider
                                aria-haspopup="true"
                                aria-controls="ringtone-menu"
                                aria-label="Aonde você compartilhará os links"
                                onClick={handleClickListItem}
                                role="listitem"
                            >
                                <ListItemText primary="Qual sua principal fonte de cliques?" secondary={value} />
                            </ListItem>
                            <ConfirmationDialogRaw
                                classes={{
                                    paper: classes.paper,
                                }}
                                id="ringtone-menu"
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                value={value}
                            />
                        </List>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={signUp}
                        >
                            Criar conta
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/sign-in" variant="body2">
                                    {"Faça login aqui"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
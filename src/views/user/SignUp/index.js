import React from 'react';
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
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';


const styles = withStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%'
    }
}));





class signUp extends React.Component {

    signUp = () => {
        Axios.post('https://adbit-app.herokuapp.com/api/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            company: this.state.company
        }).then((response) => {
            alert(response.data.message)
            this.props.history.push("/sign-in");
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            company: '',
            password: '',
        }
    }

    render() {
        const { classes } = this.props;
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
                        <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="nome"
                                label="Primeiro nome"
                                name="nome"
                                autoComplete="nome"
                                autoFocus
                                onChange={e => this.setState({name: e.target.value})}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Seu email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={e => this.setState({email: e.target.value})}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="senha"
                                label="Sua senha"
                                type="password"
                                id="senha"
                                autoComplete="current-password"
                                onChange={e => this.setState({password: e.target.value})} 
                                
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.signUp} 
                            >
                                Criar conta
            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/sign-in" variant="body2">
                                        {"Já possui conta? Faça login"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

signUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(signUp);
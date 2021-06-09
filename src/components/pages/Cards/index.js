import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    centralizar: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    paper: {
        padding: '20px',
    },
    iconeGrande: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}));

function Index(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <div className={classes.centralizar}>
                {props.icone}
            </div>
            <Typography align='center' style={{ paddingBottom: '20px', }}>
                {props.titulo}
            </Typography>
            <div>
                <Typography>
                    {props.conteudo}
                </Typography>
            </div>
        </Paper>


    )
};
export default Index;
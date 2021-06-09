import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import { LinkIcon } from '@material-ui/icons/Link'
import { withStyles } from "@material-ui/core/styles";

import PropTypes from 'prop-types';

const styles = theme => ({
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
});


class Index extends Component {
    state = {
        searchNodes: ""
      };
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <div className={classes.centralizar}>
                    <LinkIcon className={classes.iconeGrande} />
                </div>
                <Typography align='center' style={{ paddingBottom: '20px', }}>
                    LINKS SEGUROS
                </Typography>
                <div>
                    <Typography>
                        Todas as suas URLs encurtadas são criptografas por padrão,
                        tornandos as mais seguras através de certificados de segurança (HTTPS)
                        consolidados no mercado.
            </Typography>
                </div>
            </Paper>
        )
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Index);

import React, { Component } from 'react'
import Axios from 'axios'
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';



var host = process.env.REACT_APP_ROOT_PATH
export default class index extends Component {

    encurtar = () => {
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

    handleSubmit(event) {
        event.preventDefault();
    }

    constructor(props) {
        super(props)

        this.state = {
            link: '',
            encurtado: host + '/encurtado',
        }
    }


    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid lg={12}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                label="Encurtar link"
                                style={{ margin: 8, width: '100%' }}
                                helperText="Cole aqui o seu link"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={e => this.setState({ link: e.target.value })}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.encurtar}
                                endIcon={<SendIcon />}
                            >
                                Encurtar
                            </Button>
                        </form>
                    </Grid>
                <span>{this.state.encurtado}</span>
                </Grid>
            </div>
        )
    }
}

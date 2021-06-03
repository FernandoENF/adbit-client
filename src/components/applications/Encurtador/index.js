import React, { Component } from 'react'
import Axios from 'axios'
import {Button, Icon} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';




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
            encurtado: 'link.com/encurtado',
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="standard-full-width"
                        label="Encurtar link"
                        style={{ margin: 8 }}
                        helperText="Cole aqui o seu link"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => this.setState({ link: e.target.value })}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon/>}
                    >
                        Encurtar
                    </Button>
                </form>
                <span>{this.state.encurtado}</span>
            </div>
        )
    }
}

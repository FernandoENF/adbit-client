import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider
} from '@material-ui/core';
import { ExitToApp, Home } from '@material-ui/icons'
import LinkIcon from '@material-ui/icons/Link';
import './style.css'

export default class index extends Component {
    render() {
        return (
                <List>
                    <Link to="dashboard">
                        <ListItem button>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Visão Geral" />
                        </ListItem>
                    </Link>
                    <Link to="meus-links">
                        <ListItem button>
                            <ListItemIcon>
                                <LinkIcon />
                            </ListItemIcon>
                            <ListItemText primary="Meus Links" />
                        </ListItem>
                    </Link>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToApp />
                        </ListItemIcon>
                        <ListItemText primary="Sair" />
                    </ListItem>
                </List>

        )
    }
}

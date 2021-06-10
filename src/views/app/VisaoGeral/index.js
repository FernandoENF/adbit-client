import React, { Component } from 'react'
import Layout from '../../../layout/dashboard'
import Encurtador from '../../../components/applications/Encurtador'
import { withRouter } from 'react-router-dom'
import Grafico from '../../../components/applications/charts'

import {Grid} from '@material-ui/core'

class VisaoGeral extends Component {
    render() {
        return (
            <Layout>
                <Encurtador />
                <Grid container spacing={3}>
                    <Grid xs={12} sm={12} md={4} >
                        <Grafico />
                    </Grid>
                    <Grid xs={12} sm={12} md={4} >
                        <Grafico />
                    </Grid>
                    <Grid xs={12} sm={12} md={4} >
                        <Grafico />
                    </Grid>
                </Grid>
            </Layout>
        )
    }
}

export default withRouter(VisaoGeral)

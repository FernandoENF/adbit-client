import React, { Component } from 'react'
import Layout from '../../../layout/dashboard'
import Encurtador from '../../../components/applications/Encurtador'
import { withRouter } from 'react-router-dom'

class VisaoGeral extends Component {
    render() {
        return (
            <Layout>
                <Encurtador />
            </Layout>
        )
    }
}

export default withRouter(VisaoGeral)

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import LinkItem from '../../../components/applications/LinkList';
import Layout from '../../../layout/dashboard'


export default function CollapsibleTable() {
    return (
        <Layout>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Link</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Cliques</TableCell>
                            <TableCell align="right">Receita</TableCell>
                            <TableCell align="right">Data de criação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* itens da tabela aqui */}
                        <LinkItem />
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>



    );
}




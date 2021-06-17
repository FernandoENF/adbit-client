import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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
    const [items, setItems] = useState([]);
    const listLinks = () => {
        Axios.get('https://adbit-app.herokuapp.com/api/links',{
            headers: {
                adbitAcessToken: localStorage.getItem('token'),
            }
        }).then((response) => {
            console.log(response);
            setItems(response.data)
        })}
    useEffect(() => {
        listLinks()
      });

    const orderByDateAsc = () => {
        items.map((item, index) => (
            <LinkItem key={index} id ={index+1} slug={item.slug} data={item.data}></LinkItem>
            ))
    }

    const orderByDateDsc = () => {
        items.reverse().map((item, index) => (
            <LinkItem key={index} id ={index+1} slug={item.slug} data={item.data}></LinkItem>
            ))
    }

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
                        {orderByDateAsc}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>



    );
}




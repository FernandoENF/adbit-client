import React from 'react'
import moment from 'moment'
import Axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Button, TextField } from '@material-ui/core';



const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

export default function LinkItem(props) {
  var ndata = moment(props.data).utc().format('DD-MM-YYYY')
  var host = process.env.REACT_APP_ROOT_PATH
  var slug = props.slug
  var link = host + '/' + slug
  const [newSlug, setNewSlug] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const alterarSlug = () => {
    Axios.post('https://adbit-app.herokuapp.com/api/links/novoLink', {
            slug: slug,
            newslug: newSlug,
        },
        {
          headers: {
              adbitAcessToken: localStorage.getItem('token'),
          }
      });
  }

  const removerLink = () => {
    Axios.delete('https://adbit-app.herokuapp.com/api/links/delete', {
            slug: slug,
        },
        {
          headers: {
              adbitAcessToken: localStorage.getItem('token'),
          }
      });

  }


  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {link}
        </TableCell>

        <TableCell align="right">
          {props.id}
        </TableCell>

        <TableCell align="right">
          149387
        </TableCell>

        <TableCell align="right">
          R$ 00,00
        </TableCell>

        <TableCell align="right">{ndata}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Configurações
              </Typography>
              <form>
                <TextField
                  label="Personalize o link"
                  style={{ margin: 8, width: '100%' }}
                  margin="normal"
                  InputLabelProps={{ shrink: true, }}
                  onChange={e => setNewSlug(e.target.value)}
                />
                <Button>
                  Copiar link
                </Button>
                <Button
                 onClick={alterarSlug}>
                  Alterar
                </Button>
                <Button
                 onClick={removerLink}>
                  Excluir
                </Button>
              </form>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
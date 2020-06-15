import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, date, account, client, balance, action) {
  return { id, date, account, client, balance, action };
}

const rows = [
  createData(1, '11-05-2020 11:50', '11110000222', 'John Doe', '200000', ''),
  createData(2, 'Ice cream sandwich', 237, 9.0, 37, ''),
  createData(3,'Eclair', 262, 16.0, 24, ''),
  createData(4, 'Cupcake', 305, 3.7, 67, ''),
  createData(5, 'Gingerbread', 356, 16.0, 49, ''),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function handleClick(id){
    alert("Id selectionné : " + id)
}

export default function CustomTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Compte</StyledTableCell>
            <StyledTableCell align="right">Client</StyledTableCell>
            <StyledTableCell align="right">Solde</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="right">{row.account}</StyledTableCell>
              <StyledTableCell align="right">{row.client}</StyledTableCell>
              <StyledTableCell align="right">{row.balance}</StyledTableCell>
              <StyledTableCell align="right">
                    <span onClick={ (e) => {
                         e.preventDefault()
                         handleClick(row.id)
                         } }>
                        <i className="fa fa-pen"></i> {row.action}
                    </span>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

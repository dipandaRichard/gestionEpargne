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

function createDataEpargne(id, date, amount, benefit, total) {
  return { id, date, amount, benefit, total };
}

const rowsDataEpargne = [
  createDataEpargne(2,  new Date().toLocaleDateString(), 237, 9.0, 37),
  createDataEpargne(3, new Date().toLocaleDateString(), 262, 16.0, 24),
  createDataEpargne(4,  new Date().toLocaleDateString(), 305, 3.7, 67),
  createDataEpargne(5,  new Date().toLocaleDateString(), 356, 16.0, 49),
];


function createDataEmprunt(id, date, amount, rate, benefit, deathline, loan, rest) {
  return { id, date, amount, rate, benefit, deathline, loan, rest};
}

const rowsDataEmprunt = [
  createDataEmprunt(2,  new Date().toLocaleDateString(), 237, 9.0, 37, new Date().toLocaleDateString(), 35, 22,),
  createDataEmprunt(3, new Date().toLocaleDateString(), 262, 16.0, 24, new Date().toLocaleDateString(), 35, 22,),
  createDataEmprunt(4,  new Date().toLocaleDateString(), 305, 3.7, 67, new Date().toLocaleDateString(), 35, 22,),
  createDataEmprunt(5,  new Date().toLocaleDateString(), 356, 16.0, 49, new Date().toLocaleDateString(), 35, 22,),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  titleStyle: {
    padding:"20px 0"
  }
});

function handleClick(id){
    alert("Id selectionné : " + id)
}

export default function CustomTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <h2 className={classes.titleStyle} >{props.tableTitle}</h2>
      <Table className={classes.table} aria-label="customized table">
        
          {props.tableType == "epargne"  &&
          (
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">{props.tableEntete.id}</StyledTableCell>
                <StyledTableCell align="left">{props.tableEntete.date}</StyledTableCell>
                <StyledTableCell align="right">{props.tableEntete.montant}</StyledTableCell>
                <StyledTableCell align="right">{props.tableEntete.interet}</StyledTableCell>
                <StyledTableCell align="right">{props.tableEntete.total}</StyledTableCell>
              </TableRow>
            </TableHead>
          ) }
         { props.tableType == "emprunt"  &&
          (
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">{props.tableEntete.id}</StyledTableCell>
                <StyledTableCell align="left">{props.tableEntete.date}</StyledTableCell>
                <StyledTableCell align="right">{props.tableEntete.montant}</StyledTableCell>
                <StyledTableCell align="right">{props.tableEntete.taux}</StyledTableCell>
                <StyledTableCell align="right">{props.tableEntete.interet}</StyledTableCell>
                <StyledTableCell align="right">{props.tableEntete.echeance}</StyledTableCell>
                <StyledTableCell align="right">{props.tableEntete.avance}</StyledTableCell>
                <StyledTableCell align="right">{props.tableEntete.reste}</StyledTableCell>
              </TableRow>
            </TableHead>
          ) }
        

        <TableBody>
          {
            props.tableType == "epargne"  &&
            (  
              rowsDataEpargne.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="left">{row.id}</StyledTableCell>
                  <StyledTableCell align="left">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                  <StyledTableCell align="right">{row.benefit}</StyledTableCell>
                  <StyledTableCell align="right">{row.total}</StyledTableCell>
                </StyledTableRow>
              ))
            )
          } 

          {
          props.tableType == "emprunt"  &&
            (  
              rowsDataEmprunt.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="left">{row.id}</StyledTableCell>
                  <StyledTableCell align="left">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                  <StyledTableCell align="right">{row.rate}</StyledTableCell>
                  <StyledTableCell align="right">{row.benefit}</StyledTableCell>
                  <StyledTableCell align="right">{row.deathline}</StyledTableCell>
                  <StyledTableCell align="right">{row.loan}</StyledTableCell>
                  <StyledTableCell align="right">{row.rest}</StyledTableCell>
                </StyledTableRow>
              ))
            )
          }


        
          {props.tableType == "epargne"  && (
            <StyledTableRow>
              <TableCell rowSpan={0}></TableCell>
              <TableCell  align="right" colSpan={3}>
                Total
              </TableCell>
              <TableCell align="right">10000 FCFA</TableCell>
             </StyledTableRow>
          )
          }
          {props.tableType == "emprunt"  && (
            <StyledTableRow>
              <TableCell  align="right" colSpan={1}>
                Total
              </TableCell>
              <TableCell align="right" colSpan={1}></TableCell>
              <TableCell align="right" colSpan={1}>45iuy FCFA</TableCell>
              <TableCell align="right" colSpan={1}></TableCell>
              <TableCell align="right" colSpan={1}>999999</TableCell>
              <TableCell align="right" colSpan={1}></TableCell>
              <TableCell align="right" colSpan={1}>1111</TableCell>
              <TableCell align="right" colSpan={0}>222222</TableCell>
            </StyledTableRow>
          )
          }
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}

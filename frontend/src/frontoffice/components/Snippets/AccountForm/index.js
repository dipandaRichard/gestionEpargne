import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AccountForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Montant</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Interêts</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Montant total</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>5%</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>27/10/2020</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>27/11/2020</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>1 mois</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

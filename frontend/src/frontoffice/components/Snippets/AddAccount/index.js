import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form_container: {
    padding: "20px",
    width: "600px",
  }
}));

export default function BalanceGrid(props) {
  const classes = useStyles();

  return (
    <div className="row">  
      <div className={classes.root}>
        <form className={classes.form_container}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                <TextField
                  id="outlined-margin-none"
                  label="Membre"
                  size="small"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                  id="outlined-margin-none"
                  label="N° Du compte"
                  size="small"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  fullWidth
                /> 
                </Grid>

                
            </Grid>

            <div className="row" style={{ width: "100%" }}>
              <Button 
                variant="contained"
                onClick={props.handleSubmit} 
                color="primary" 
                style={{ 
                    width: "200px", 
                    margin: "0 auto", 
                    marginTop: 20 }}>
                Ajouter
              </Button>
            </div>
          </form>
        </div>    
     </div>
    
  );
}

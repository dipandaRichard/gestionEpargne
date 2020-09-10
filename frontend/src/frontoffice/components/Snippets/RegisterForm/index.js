import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginBottom: 20,
  },
  form_content: {
    width: '100%',
  },
  form_container: {
    padding: "20px",
    width: "600px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function RegisterForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
    <form className={classes.form_container}>
      <div className={`row ${classes.form_content}`}>
        <div className= "col-sm-6">
          <TextField
            id="outlined-margin-none"
            label="Montant"
            size="small"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
           variant="outlined"
            fullWidth
          />
        </div>
        <div className= "col-sm-6">
        
          <TextField
            
            size="small"
            id="outlined-margin-none"
            label="Prénom"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
           variant="outlined"
           fullWidth
        />
        </div>

        <div className= "col-sm-4">
        <TextField
          label="Téléphone"
          size="small"
          id="outlined-margin-none"
          placeholder="Placeholder"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          fullWidth
        />
        </div>

        <div className= "col-sm-4">
        <TextField
          label="CNI"
          size="small"
          id="outlined-margin-dense"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          fullWidth
        />
        </div>

        <div className= "col-sm-4">
        <TextField
          label="Adresse"
          size="small"
          id="outlined-margin-normal"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          fullWidth
        />
        </div>
      </div>
      
      <div className="row" style={{ width: "100%" }}>
        <Button 
          variant="contained" 
          onClick={props.handleSubmit}
          color="primary" 
          style={{ 
            width: "200px", 
            margin: "0 auto",
            marginTop: 20 
            }}>
          Enregistrer
        </Button>
      </div>
    </form>
      
    </div>
  );
}

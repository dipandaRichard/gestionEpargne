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
}));

export default function Operations() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <div className="row" style={{ width: "100%", marginBottom:20}}  >
        <div className="col-sm-4">
          <Button variant="contained" color="primary"  style={{ width: "200px", margin: "0 auto", marginTop: 20 }}>
            Dépôt
          </Button>
        </div>
        <div className="col-sm-4">
          <Button variant="contained" color="primary"  style={{ width: "200px", margin: "0 auto", marginTop: 20 }}>
            Emprunt
          </Button>
        </div>
        <div className='col-sm-4'>
          <Button variant="contained" color="primary"  style={{ width: "200px", margin: "0 auto", marginTop: 20 }}>
            Rembousement
          </Button>
        </div>
        
      </div>
    </div>
  );
}

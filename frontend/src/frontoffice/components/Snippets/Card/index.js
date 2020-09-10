import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  

  return (
    <Card className={classes.root}>

      <h3>{props.cardTitle} </h3>
      <CardContent>
      
      <div className={`row ${classes.bloc_bottom}`}>
          <div className={`col-4`}>
            <p style={{frontSize:"50 px" }} >Montant:</p>
            <p>Interêts:</p>
            <p>TOTAL :</p>
          </div>
         
          <div className="col-6" style={{textAlign:"right"}}>
            <h4>100000</h4>
            <h4>5000</h4>
            <h3>105000</h3>
          </div>
          <div className="col-2" style={{textAlign:"right"}}>
            <h4>Fcfa</h4>
            <h4>Fcfa</h4>
            <h4>Fcfa</h4>
          </div>
        </div>
        
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.handleOpenModal} >Détails</Button>
      </CardActions>
    </Card>
  );
}

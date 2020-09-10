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
  bloc_top: {
    padding: 20
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={`row ${classes.bloc_top}`}>
          <div className={`col-2`}>
            <div className={classes.pic_wrapper}>
              <i className="fa fa-user fa-6x"></i>
            </div>
          </div>
          <div className="col-10">
            <h4>Compte N°: 12U00040</h4>
            <h3>DIPANDA Achile Richard</h3>
            <h4>Tel: 12U00040</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

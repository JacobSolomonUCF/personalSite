import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import graduation from "../../assets/img/graduation.jpg";
import outdoors from "../../assets/img/outdoors.jpg";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  row:{
    padding: '15px 0px',
  },
  img:{
    height: '300px',
    borderRadius: "5px",
  },
  text:{

  },
  flex:{
    display: 'flex',
    alignItems: 'center',
  },
});

function About(props) {
  const { classes, items } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {items.map((item,index) =>{
          if (item.photo === "graduation"){
            item.photoURL = graduation
          }
          if (item.photo === "outdoors"){
            item.photoURL = outdoors
          }
          return(
            <Grid className={classes.row} item xs={12} key={index}>
                {index % 2 === 0 ?
                  (
                    <Grid className={classes.flex} container spacing={0}>
                      <Grid className={classes.text} item xs={6}>
                        {item.text}
                      </Grid>
                      <Grid item xs={6}>
                        <img src={item.photoURL} alt="..." className={classes.img} />
                      </Grid>
                    </Grid>
                  ):
                  (
                    <Grid className={classes.flex} container spacing={0}>
                      <Grid item xs={6}>
                        <img src={item.photoURL} alt="..." className={classes.img} />
                      </Grid>
                      <Grid className={classes.text} item xs={6}>
                        {item.text}
                      </Grid>
                    </Grid>
                  )
                }
            </Grid>
            )})}
      </Grid>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
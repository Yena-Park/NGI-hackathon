import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import theme from "../../utils/theme";

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: "white",
    padding: "50px 0 25px 0"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const FAQSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={24}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Typography variant="h4" gutterBottom>
            More Information
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              Who is RBC?
            </Typography>
            <Typography component="p">
            rbc
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              Why RBC?
            </Typography>
            <Typography component="p">
              rbc
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              How does RBC work?
            </Typography>
            <Typography component="p">
              rbc
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              RBC?
            </Typography>
            <Typography component="p">
              RBC?
              <ol class>
                <li>Send .</li>
                <li>Embed </li>
                <li>Travellers .</li>
              </ol>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              How do I make trips on RBC?
            </Typography>
            <Typography component="p">
              rbc
              <ol>
                <li>rbc</li>
                <li>
                  rbc
                </li>
              </ol>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles(theme))(FAQSection);
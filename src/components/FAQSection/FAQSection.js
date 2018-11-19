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
            Royal Bank of Canada (RY on TSX and NYSE) and its subsidiaries operate under the master brand name RBC.
            With over 81,000 full-time and part-time employees who serve 16 million clients in Canada, the U.S. and 34 other countries, we are one of Canada's biggest banks, and one of the largest in the world based on market capitalization and provide personal and commercial banking, wealth management, insurance, investor services and capital markets products and services on a global basis.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
            Where is RBC located?
            </Typography>
            <Typography component="p">
            We have our main headquarter at Montreal, Quebec. Our other locations include: China, Hong Kong, Singapore, Channel Islands, Guernsey, Jersey, Edinburgh, London, Bahamas, Vancouver, San Francisco, Seattle, and Wilmington.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
            Why RBC?
            </Typography>
            <Typography component="p">
            View your account details and transaction history for the last seven years. You can also set up and receive RBC Alerts about your banking activity and available RBC Offers.
It’s a breeze to move money to your savings account, pay down your credit card, loan or credit line, or make a payment on your mortgage2. You can also transfer money between your RBC Royal Bank Canadian and RBC Bank (U.S.) accounts, instantly and for free.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles(theme))(FAQSection);
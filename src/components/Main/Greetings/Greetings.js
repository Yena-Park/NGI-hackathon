import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import theme from "../../../utils/theme";
import Email from "../Email/Email";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: '55px',
    width: '350px',
    '&:hover': {
      focus: theme.palette.primary.main2
    }
  },
  button: {
    height: '55px',
    margin: '9px 0 0 0',
    background: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.main2
    }
  },
  input: {
    display: 'none',
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 800,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  }
});

const Greetings = (props) => {
  const { classes } = props;
  return(
    <div>
      <main>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              The RBC made personal banking platform for you.
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
            We can help you get started financially in Canada.
            </Typography>
              <div className={classes.heroButtons}>
               <Email />
              </div>
            </div>
          </div>
      </main>
      </div>
  )
}

export default withStyles(styles(theme))(Greetings);



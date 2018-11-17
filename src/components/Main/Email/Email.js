import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import theme from "../../../utils/theme";

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
  },
  uiSectionTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: '55px',
    width: '200px',
    '&:hover': {
      focus: theme.palette.primary.main2
    }
  }
});

const Email = (props) => {
  const { classes, uiSection } = props;
  return(
  <Grid container spacing={16} justify="center" alignItems="center">
    <Grid item>
    <TextField
      id="outlined-email-input"
      label="Email"
      className={uiSection ? classes.uiSectionTextField : classes.textField}
      type="email"
      name="email"
      autoComplete="email"
      margin="normal"
      variant="outlined"
    />
    </Grid>
    <Grid item>
      <Button variant="contained" size="large" color="primary" className={classes.button}>
        Get Started
      </Button>
    </Grid>
  </Grid>
  )
}

export default withStyles(styles(theme))(Email);



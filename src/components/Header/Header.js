import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import rbcLogo from '../../images/rbcLogo.png';
import MyPage from '../../pages/MyPage'

const MyLink = props => <Link to='/MyPage' {...props} />

const styles = theme => ({
  toolBar: {
    background: 'white',
    color: 'white'
  },
  button: {
    color: theme.palette.primary.main
  }
});

const Header = (props) => {
  const {classes} = props;
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolBar}>
        <img alt="logo" src={rbcLogo} width="40px" height="50px"/>
          <Grid container spacing={16} direction="row" justify="flex-end" alignItems="center">
            <Grid item>
              <Button component={MyLink}>My Page</Button>
              <Button href="https://www.rbcroyalbank.com/personal.html" target="_blank">RBC</Button>
              <Button href="" target="_blank">Contact Us</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
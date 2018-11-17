import React from 'react';
import styled from 'styled-components';

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: "4rem 1rem",
    overflowY: "hidden"
  },
  img: {
    height: "100%",
    width: "80%",
    marginLeft: "10%",
  },
  description: {
    padding: "8px 8px 16px 8px"
  }
});

const Wrapper = styled.div`
  display: block;
  height: 100%;
  background: url('http://www.weavetravels.com/background-outlook.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -10px;
  min-width: 1024px;
  @media (max-width: 600px) {
    margin-top: 0px;
  }
  @media (max-width: 1024px) {
    margin-top: 0px;
    min-width: 100vw;
  }
`
const MobileUISection = ({classes}) => {
  return (
    <Wrapper>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={10} sm={6}>
            <Typography className={classes.description} align="left" variant="h5">
              The world is going mobile.
              </Typography>
              <Typography className={classes.description} align="left" variant="h5">
              Most people search for travel information on their phone or tablet, and mobile bookings are rising.
              </Typography>
              <Typography className={classes.description} align="left" variant="h5">
              Weave comes standard with an incredible mobile view so your content is beautiful, visual and interactive, everywhere.
            </Typography>
          </Grid>
          <Grid item xs={10} sm={1}/>
          <Grid item xs={10} sm={3}>
            <img class={classes.img} alt="mobile-phone" src="http://www.weavetravels.com/mobile-phone.png"/>
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  );
};

export default withStyles(styles)(MobileUISection);
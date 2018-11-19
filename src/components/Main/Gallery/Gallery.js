import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components';
import img1 from '../../../images/1.png'
import img2 from '../../../images/2.png'
import img3 from '../../../images/3.png'
import img4 from '../../../images/4.png'

const styles = theme => ({
  container: {
    display: 'flex'
  },
  grid: {
    padding: '10px'
  }
});

const Div = styled.div`
  transition: .5s ease;
  opacity: 0;
  :hover {
    opacity: 1;
}
`

const Image1 = styled.div`
  display: block;
  height: 60vh;
  background: url(${img1});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -10px;
  min-width: 25%;

  ${Div} {
    opacity: 0;
  }
  :hover {
    opacity: 0.4;
      ${Div} {
          opacity: 1;
      }
  }
`
const Image2 = styled.div`
  display: block;
  height: 60vh;
  background: url(${img2});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -10px;
  min-width: 25%;

  opacity: 1;
  :hover {
    opacity: 0.4;
`
const Image3 = styled.div`
  display: block;
  height: 60vh;
  background: url(${img3});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -10px;
  min-width: 25%;

  opacity: 1;
  :hover {
    opacity: 0.4;
`
const Image4 = styled.div`
  display: block;
  height: 60vh;
  background: url(${img4});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -10px;
  min-width: 25%;

  opacity: 1;
  :hover {
    opacity: 0.4;
`

const Text = styled.div`
  color: black;
  font-size: 16px;
`

const Gallery = (props) => {
  const {classes} = props;
  return(
    <div className={classes.container}>
      <Image1 className={classes.image}>
        <Grid
          className={classes.grid}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Typography className={classes.textAnimation}>Income Generation</Typography>
        </Grid>
        <Div>
          <Text>
          Income generation is an investment or business activity creating money.
          </Text>
        </Div>
      </Image1>
      <Image2 className={classes.image}>
        <Grid
            className={classes.grid}
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Typography className={classes.textAnimation}>Saving Strategies</Typography>
          </Grid>
          <Div>
            <Text>
            For the savings strategies picture: Save automatically - monthly automated transfer from checking to savings, ideally after you are paid; “what you don’t see, you probably won’t miss”
            </Text>
          </Div>
      </Image2>
      <Image3 className={classes.image}>
        <Grid
          className={classes.grid}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Typography className={classes.textAnimation}>Services</Typography>
        </Grid>
        <Div>
            <Text>
            Commercialization of a skill or expertise to a market willing and able to pay.
            </Text>
          </Div>
      </Image3>
      <Image4 className={classes.image}>
        <Grid
            className={classes.grid}
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Typography className={classes.textAnimation}>Membership Dues</Typography>
          </Grid>
          <Div>
            <Text>
            Fees collected from members of a group, association, or organization in exchange for services such as a newsletter, discounts, conferences, insurance, etc.
            </Text>
          </Div>
      </Image4>
    </div>
  )
}

export default withStyles(styles)(Gallery);
import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';
import worldMap from '../../images/worldmap.png'

import theme from "../../utils/theme";
import Email from "../Main/Email/Email";

const Image = styled.div`
  background: url(${worldMap});
  padding: 4rem 1rem;
  height: 100%;
  width: 100%;
  background-size: cover;
`

const styles = theme => ({
  root: {
  },
  img: {
    width: "100%",
    borderRadius: "4px",
    border: `1px solid ${theme.palette.primary.main}`
  },
  title: {
    padding: "8px 8px"
  },
  description: {
    padding: "8px 8px"
  }
});

const UISection = ({ classes }) => {
  return (
    <Image>
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={10} sm={4}>
            <Typography className={classes.title} component="h4"
              variant="h4" align="center">
              Your travel, your way!
            </Typography>
            <Email uiSection/>
          </Grid>
          <Grid item xs={10} sm={1}/>
          <Grid item xs={10} sm={6}>
            <img
              className={classes.img}
              alt="pc-ui-image2"
              src="http://www.weavetravels.com/ui-image.png"
            />
          </Grid>
        </Grid>
      </div>
    </Image>
  );
};

export default withStyles(styles(theme))(UISection);
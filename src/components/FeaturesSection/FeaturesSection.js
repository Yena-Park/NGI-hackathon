import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import analytics_feature from "../../images/analytics_feature.png"
import interactive_feature from "../../images/interactive_feature.png"
import visual_feature from "../../images/visual-feature.png"

import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  padding: 1rem 0.5rem 1rem 0.5rem;
  text-align: center;
  height: 8rem;
  display: flex;
  align-items: center; /* align vertical */
`;

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: "#f4f6f8",
    padding: "3rem 0 5rem 0"
  },
  img: {
    marginLeft: "5%",
    width: "90%"
  },
  sectionTitle: {
    paddingBottom: "1.5rem",
    textAlign: "center",
    color: "black",
  }
});

const FeaturesSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="stretch">
        <Grid item xs={10}>
          <Typography
            className={classes.sectionTitle}
            component="h4"
            variant="h4"
            gutterBottom
          >
            All the features you need
          </Typography>
        </Grid>
        <Grid className={classes.paper} justify="center" alignItems="center" container spacing={24}>
          <Grid className={classes.gridItem} item xs={10} sm={6} md={3}>
            {" "}
            <Paper>
              <DescriptionWrapper>
                <Typography
                  className={classes.featureDescription}
                  gutterBottom
                  variant="subtitle1"
                >
                  Make your trips visual with mapping and multimedia.
                </Typography>
              </DescriptionWrapper>
              <img
                className={classes.img}
                alt="visual_feature"
                src={visual_feature}
              />
            </Paper>
          </Grid>
          <Grid className={classes.gridItem} item xs={10} sm={6} md={3}>
            <Paper>
              <DescriptionWrapper>
                <Typography
                  className={classes.featureDescription}
                  gutterBottom
                  variant="subtitle1"
                >
                  Weave is interactive! This means travellers can experience a
                  trip before they book.
                </Typography>
              </DescriptionWrapper>
              <img
                className={classes.img}
                alt="interactive_feature"
                src={interactive_feature}
              />
            </Paper>
          </Grid>
          <Grid className={classes.gridItem} item xs={10} sm={6} md={3}>
            <Paper>
              <DescriptionWrapper>
                <Typography
                  className={classes.featureDescription}
                  gutterBottom
                  variant="subtitle1"
                >
                  Like never before, you can refine content, products, and
                  marketing based on data driven decisions and Weave analytics.
                </Typography>
              </DescriptionWrapper>
              <img
                className={classes.img}
                alt="analytics-feature"
                src={analytics_feature}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(FeaturesSection);
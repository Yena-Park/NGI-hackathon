import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { FacebookSquare } from "styled-icons/fa-brands";

import theme from "../../utils/theme"

const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;
const Facebook = styled(FacebookSquare)`
  color: ${theme.palette.primary.main};
  width: 30px;
  height: 30px;
  padding: 0 16px;
  cursor: pointer;
`;

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f4f6f8",
    borderTop: `solid 3px lightgray`,
    paddingTop: "16px",
    overflowX: "hidden",
    margin: '30px 0 0 0'
  },
  footerSections: {
    padding: "0 16px",
    color: "white"
  },
  subFooter: {
    backgroundColor: "#f4f6f8",
    padding: "8px 16px",
    marginTop: "8px"
  },
  footerText: {
    color: "white",
    fontSize: "16px",
    lineHeight: 1.5
  }
});

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={0} align="center">
        <Grid item xs={12} sm={4}>
          <Typography className={[classes.footerText, classes.footerSections]}>
            <Anchor target="_blank" href="https://www.rbcroyalbank.com/personal.html">
              RBC
            </Anchor>
          </Typography>
          <Typography className={[classes.footerText, classes.footerSections]}>
            <Anchor target="_blank" href="https://jobs.rbc.com/ca/en">
              Jobs
            </Anchor>
          </Typography>
          <Typography className={[classes.footerText, classes.footerSections]}>
            <Anchor target="_top" href="">
              Contact Us
            </Anchor>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography className={[classes.footerText, classes.footerSections]}>
            <Anchor href="" target="_blank">
              Privacy Policy
            </Anchor>
          </Typography>
          <Typography className={[classes.footerText, classes.footerSections]}>
            <Anchor href="" target="_blank">
              Cookie Policy
            </Anchor>
          </Typography>
          <Typography className={[classes.footerText, classes.footerSections]}>
            <Anchor
              href=""
              target="_blank"
            >
              Terms and Conditions
            </Anchor>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Facebook
            onClick={() => {
              window.open("https://www.facebook.com/rbc/", "mywindow");
            }}
          />
        </Grid>
        <Grid className={classes.subFooter} item xs={12}>
          <span>(c) 2018 RBC. All Rights Reserved</span>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(styles(theme))(Footer);
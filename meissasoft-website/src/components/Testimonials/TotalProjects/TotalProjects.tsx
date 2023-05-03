import React from 'react';

import Grid from '@mui/material/Grid';

import { DivTitle, DivDescription, Span, StyledGrid } from './TotalProjects.styles';

const TotalProjects = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} sm={8} xs={12}>
        <Grid container>
          <Grid item xs={12} sm={4} md={4} display="flex" flexDirection="column">
            <DivTitle>20+</DivTitle>
            <DivDescription>GLOBAL CLIENTS</DivDescription>
            <Grid item xs={12} sm={12} md={12}>
              <Span>
                Our global clients includes some legendary names of the tech industry. We’ve provided services to a
                significant number of clients ranging from individuals to enterprises
              </Span>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} display="flex" flexDirection="column">
            <DivTitle>90%</DivTitle>
            <DivDescription>RETURNING CLIENTS</DivDescription>
            <Grid item xs={12} sm={12} md={12}>
              <Span>
                Our ability to reinvest our learning and resources into services that proactively exceed their
                expectations has ensured that our clients stay with us for years. Most of our revenue comes from repeat
                business, and most of our new clients are referrals by existing ones.
              </Span>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} display="flex" flexDirection="column">
            <DivTitle>80%</DivTitle>
            <DivDescription>LOYAL CLIENTS</DivDescription>
            <Grid item xs={12} sm={12} md={12}>
              <Span>
                LoyaltyLion has been integral to improving our data capture. Since launching we’ve seen a substantial
                (+20%) increase in customers who have logged in compared to guests and they now account for the majority
                of purchases
              </Span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};
export default TotalProjects;

import * as React from 'react';

import PeopleIcon from '@mui/icons-material/People';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid } from '@mui/material';

import { DivTitle, StyledGrid, Heading, DivDescription, Span, DivWrapper, StyledDivider } from './OurHistory.styles';

const OurHistory = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <DivTitle>OUR HISTORY</DivTitle>
          </Grid>
          <Grid item xs={12} marginTop="20px" display="flex" justifyContent="center">
            <Heading>
              We Are Very Proud As A Company To <br />
              Always Deliver On Our Word
            </Heading>
          </Grid>
          <Grid container marginTop="20px" columnSpacing={4} rowSpacing={2}>
            <Grid item xs={12} md={4}>
              <Grid container display="flex" justifyContent="center">
                <Grid
                  container
                  item
                  md={12}
                  xs={8}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  columnSpacing={{ xs: 4 }}
                >
                  <Grid item xs={2} md={2}>
                    <DivWrapper>
                      <RocketLaunchOutlinedIcon />
                    </DivWrapper>
                  </Grid>
                  <Grid item xs={6} md={10}>
                    <DivDescription>We Are Founded</DivDescription>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container display="flex" flexDirection="row" justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Span>
                    Meissasoft was started in 2020 with a singular vision: to create a business where the customer comes
                    first
                  </Span>
                </Grid>
              </Grid>
              <Grid item xs={11} width="100%">
                <StyledDivider textAlign="left">2020</StyledDivider>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container display="flex" justifyContent="center">
                <Grid
                  container
                  item
                  md={12}
                  xs={8}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  columnSpacing={{ xs: 4 }}
                >
                  <Grid item xs={2} md={2}>
                    <DivWrapper>
                      <PeopleIcon />
                    </DivWrapper>
                  </Grid>
                  <Grid item xs={6} md={10}>
                    <DivDescription>20+ programmers</DivDescription>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container display="flex" flexDirection="row" justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Span>
                    Draft your dream team of software engineers in a dedicated development center. Keep in-house-like
                    control, cut down costs by 50% and double development speed with dedicated offshore developers.
                  </Span>
                </Grid>
              </Grid>
              <Grid item xs={11} width="100%">
                <StyledDivider textAlign="left">2021</StyledDivider>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container display="flex" justifyContent="center">
                <Grid
                  container
                  item
                  md={12}
                  xs={8}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  columnSpacing={{ xs: 4 }}
                >
                  <Grid item xs={2} md={2}>
                    <DivWrapper>
                      <SettingsIcon />
                    </DivWrapper>
                  </Grid>
                  <Grid item xs={6} md={10}>
                    <DivDescription>50+ projects</DivDescription>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container display="flex" flexDirection="row" justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Span>
                    In addition to extensive research and development efforts, we provide software solutions for
                    Canadian and international clients in many different industries
                  </Span>
                </Grid>
              </Grid>
              <Grid item xs={11} width="100%">
                <StyledDivider textAlign="left">2022</StyledDivider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default OurHistory;

import * as React from 'react';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DesktopMac from '@mui/icons-material/DesktopMac';
import DeveloperBoard from '@mui/icons-material/DeveloperBoard';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import SettingsIcon from '@mui/icons-material/Settings';
import WebAssetOutlined from '@mui/icons-material/WebAssetOutlined';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import {
  Div,
  Heading,
  Container,
  StyledButton,
  StyledGrid,
  DivWrapper,
  DivDescription,
  Span,
  Styled,
  Divider,
} from './OurServices.styles';

const OurServices = () => {
  return (
    <Container container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Div>OUR SERVICES</Div>
            <Typography>
              <Heading>Build Your Custom Software For Your Business</Heading>
            </Typography>
            <StyledGrid>
              <StyledButton>
                <ArrowRightAltIcon style={{ color: 'white' }} />
                GET STARTED
              </StyledButton>
            </StyledGrid>
          </Grid>
          <Grid container item xs={12} md={8}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item md={2}>
                  <DivWrapper>
                    <MobileScreenShareIcon sx={{ fontSize: '38px' }} />
                  </DivWrapper>
                </Grid>
                <Grid item md={10}>
                  <DivDescription>Mobile Development</DivDescription>
                </Grid>
              </Grid>
              <Grid container>
                <Span>
                  We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with
                  industry experience.
                </Span>
              </Grid>
              <Grid container>
                <Styled>
                  <ArrowRightAltIcon style={{ margin: '0px 5px -7px 0px' }} />
                  LEARN MORE
                </Styled>
              </Grid>
            </Grid>
            <Grid container item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item md={2}>
                  <DivWrapper>
                    <SettingsIcon sx={{ fontSize: '38px' }} />
                  </DivWrapper>
                </Grid>
                <Grid item md={10}>
                  <DivDescription>Product Engineering</DivDescription>
                </Grid>
              </Grid>
              <Grid container>
                <Span>
                  From MVP development to post-release support, we help our customers bring their products to market
                  faster and with no pitfalls on the way
                </Span>
              </Grid>
              <Grid container>
                <Styled>
                  <ArrowRightAltIcon style={{ margin: '0px 5px -7px 0px' }} />
                  LEARN MORE
                </Styled>
              </Grid>
            </Grid>
            <Divider />
            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item md={2}>
                  <DivWrapper>
                    <WebAssetOutlined sx={{ fontSize: '38px' }} />
                  </DivWrapper>
                </Grid>
                <Grid item md={10}>
                  <DivDescription>Web Developement</DivDescription>
                </Grid>
              </Grid>
              <Grid container>
                <Span>
                  From MVP development to post-release support, we help our customers bring their products to market
                  faster and with no pitfalls on the way
                </Span>
              </Grid>
              <Grid container>
                <Styled>
                  <ArrowRightAltIcon style={{ margin: '0px 5px -7px 0px' }} />
                  LEARN MORE
                </Styled>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item md={2}>
                  <DivWrapper>
                    <DesktopMac sx={{ fontSize: '38px' }} />
                  </DivWrapper>
                </Grid>
                <Grid item md={10}>
                  <DivDescription>Desktop App Development</DivDescription>
                </Grid>
              </Grid>
              <Grid container>
                <Span>
                  Desktop application development is aimed at building desktop software for Mac, Windows, and Linux or
                  upgrading existing desktop apps with new functionality. A company with 4 years in IT, ScienceSoft
                  offers professional desktop application development services using C++/Qt, .NET, and Python.
                </Span>
              </Grid>
              <Grid container>
                <Styled>
                  <ArrowRightAltIcon style={{ margin: '0px 5px -7px 0px' }} />
                  LEARN MORE
                </Styled>
              </Grid>
            </Grid>
            <Divider />
            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item md={2}>
                  <DivWrapper>
                    <DeveloperBoard sx={{ fontSize: '38px' }} />
                  </DivWrapper>
                </Grid>
                <Grid item md={10}>
                  <DivDescription>Dev Ops</DivDescription>
                </Grid>
              </Grid>
              <Grid container>
                <Span>
                  Our DevOps team manages the relationship between operations and development to ensure everything runs
                  smoothly throughout the entire lifecycle of the software – from design to development to production
                  support.
                </Span>
              </Grid>
              <Grid container>
                <Styled>
                  <ArrowRightAltIcon style={{ margin: '0px 5px -7px 0px' }} />
                  LEARN MORE
                </Styled>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item md={2}>
                  <DivWrapper>
                    <LightbulbIcon sx={{ fontSize: '38px' }} />
                  </DivWrapper>
                </Grid>
                <Grid item md={10}>
                  <DivDescription>Dedicated Developer Team</DivDescription>
                </Grid>
              </Grid>
              <Grid container>
                <Span>
                  Scale your delivery capacity with intelligent dedicated developers. Our clients succeed by leveraging
                  Intellectsoft's process of building, motivating, and managing software development teams
                </Span>
              </Grid>
              <Grid container>
                <Styled>
                  <ArrowRightAltIcon style={{ margin: '0px 5px -7px 0px' }} />
                  LEARN MORE
                </Styled>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurServices;

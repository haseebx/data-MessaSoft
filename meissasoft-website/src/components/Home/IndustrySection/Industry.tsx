import * as React from 'react';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { Div, Heading, StyledButton, DivTitle, DivDescription, StyledGrid, StyledGridWhite } from './Industry.style';
import IndustryFeatures from './IndustryFeatures';
import SettingSvg from './SettingIcon';

export const Industry = () => {
  const Industry = [
    {
      heading: 'Web Design & Development',
      para: 'We create a smooth user experience for every web design and development project we take.',
    },
    {
      heading: 'Desktop application development',
      para: ' With us, your next market-winning product will be in good hands because we have all the in-house capabilities including analysts, architects, UX/UI specialists, engineers and QA to success in such projects.',
    },

    {
      heading: 'Dev-Ops',
      para: 'Meissasosft would like to offer its services to move your workload to AWS or AZURE .',
    },
    {
      heading: 'Ecommerce',
      para: 'E-commerce solution requires a technically holistic approach and it caters to all aspects including, design, development and e-cart.',
    },
    {
      heading: 'Startup Solution',
      para: 'We are the enablers and budding entrepreneurs. We groom and nurture entrepreneurs from various industries',
    },
    {
      heading: 'Mobile App Development',
      para: 'Arpatech enjoins a hallmark of projects in mobile application development and contributed to the industry',
    },
  ];
  return (
    <Grid container>
      <Grid item xs={0} sm={0} md={0} lg={2} xl={2}></Grid>
      <StyledGridWhite item xs={12} sm={6} md={6} lg={5} xl={5} direction="row">
        <Grid container spacing={4}>
          {Industry.map((a) => {
            return <IndustryFeatures heading={a.heading} para={a.para} />;
          })}
        </Grid>
      </StyledGridWhite>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={3}
        xl={3}
        style={{
          height: '100%',
          color: 'white',
          padding: '80px 24px',
        }}
      >
        <Div>OUR SERVICES</Div>
        <Typography>
          <Heading>Software Solutions For Big Industries</Heading>
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container>
              <Grid item xs={12} sm={12} md={4} display={'flex'} justifyContent={'center'}>
                <SettingSvg />
              </Grid>
              <Grid item xs={12} sm={12} md={8} display={'flex'} justifyContent={'center'}>
                <DivTitle>
                  100 +<DivDescription>Projects Done</DivDescription>
                </DivTitle>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container>
              <Grid item xs={12} sm={12} md={4} display={'flex'} justifyContent={'center'}>
                <SettingSvg />
              </Grid>
              <Grid item xs={12} sm={12} md={8} display={'flex'} justifyContent={'center'}>
                <DivTitle>
                  200 +<DivDescription>Programers</DivDescription>
                </DivTitle>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography>
          We have a refined process after we have taken up a project. We offer the platform from where the projects take
          shape through stages of planning, testing and execution. In this aspect we follow an agile methodology and run
          the project through a loop of feedback and constant improvement.
        </Typography>
        <StyledGrid>
          <StyledButton>LEARN MORE</StyledButton>
        </StyledGrid>
      </Grid>
      <Grid item xs={0} sm={0} md={0} lg={2} xl={2}></Grid>
    </Grid>
  );
};

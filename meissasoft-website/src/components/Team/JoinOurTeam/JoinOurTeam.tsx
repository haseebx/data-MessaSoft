import * as React from 'react';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Grid } from '@mui/material';

import { DivTitle, StyledGrid, Heading, Span1, Container, StyledButton } from './JoinOurTeam.styles';

const JoinOurTeam = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container>
          <Container container style={{ padding: '40px 0px 0px 0px' }}>
            <StyledGrid item lg={12} md={12} sm={12} xs={12}>
              <DivTitle>JOIN OUR TEAM </DivTitle>
            </StyledGrid>
            <StyledGrid item lg={12} md={12} sm={12} xs={12}>
              <Heading>We Can't Wait To Meet You !</Heading>
            </StyledGrid>
            <Span1>We are looking for passionate people who will join our team and develop their full potential</Span1>
            <StyledGrid item lg={12} md={12} sm={12} xs={12}>
              <StyledButton>
                <ArrowRightAltIcon style={{ color: 'white' }} />
                SEE OPENING JOBS
              </StyledButton>
            </StyledGrid>
          </Container>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default JoinOurTeam;

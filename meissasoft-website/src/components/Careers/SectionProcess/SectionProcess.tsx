import Image from 'next/image';

import Grid from '@mui/material/Grid';

import { Container, StyledGrid, Title, StyledDivider, Description } from './SectionProcess.style';
import CustomizedSteppers from './Stepper';

const SectionProcess = () => {
  return (
    <Container container>
      <Grid item md={8} xs={12}>
        <Grid container>
          <StyledGrid item xs={12} style={{ padding: '50px 0px' }}>
            <StyledDivider>Our Process</StyledDivider>
          </StyledGrid>
          <Grid container display="flex" justifyContent="center" marginTop="20px">
            <Grid item md={5} xs={12} spacing={3} display="flex" justifyContent="center">
              <Grid container>
                <Grid item xs={12}>
                  <Title>Apply</Title>
                  <Description>
                    Scroll through the open vacancies below and apply for positions that align with your particular
                    skillset.
                  </Description>
                </Grid>
                <Grid item xs={12}>
                  <Title>Review</Title>
                  <Description>
                    Our expert recruiters review your application. They will screen your résumé and find the best fit
                    for you.
                  </Description>
                </Grid>
                <Grid item xs={12}>
                  <Title>Interviews</Title>
                  <Description>
                    We have a competency-based interviewing process to identify the people who will thrive in our
                    environment. Each department has its own criteria, but they usually revolve round the recruiter’s
                    phone screen, the hiring manager’s interview, and a combination of technical screens, panel
                    interviews, and team presentations.
                  </Description>
                </Grid>
                <Grid item xs={12}>
                  <Title>On Boarding</Title>
                  <Description>
                    Once you’ve received the “Welcome Aboard” message, our onboarding experience will polish and set you
                    up for your professional journey with Meissasoft.
                  </Description>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              md={1}
              className="hide"
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingLeft="15px"
            >
              <CustomizedSteppers />
            </Grid>
            <Grid item md={6} xs={12} position="relative" height={450}>
              <Image
                src={'https://meissasoftwebimages.s3.amazonaws.com/job-oppings.jpeg'}
                layout="fill"
                placeholder="blur"
                blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/job-oppings.jpeg&w=16&q=1`}
                loading="lazy"
                objectFit="cover"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default SectionProcess;

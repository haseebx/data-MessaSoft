import LightbulbIcon from '@mui/icons-material/LightbulbTwoTone';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SendIcon from '@mui/icons-material/SendOutlined';
import { Grid } from '@mui/material';

import {
  DivTitle,
  StyledGrid,
  Container,
  Heading,
  DivLayout,
  DivWrapper,
  StyledGridWrapper,
} from './SectionProcess.styles';

const SectionProcess = () => {
  return (
    <Container container>
      <Grid item md={8} xs={12}>
        <Grid container>
          <StyledGrid item xs={12}>
            <DivTitle>OUR PROCESS</DivTitle>
          </StyledGrid>
          <StyledGrid item xs={12}>
            <Heading>
              We Build Your Enterprise Web & <br /> Mobile Apps
            </Heading>
          </StyledGrid>
          <Grid container>
            <StyledGridWrapper item xs={12} md={3}>
              <DivWrapper>
                <MailOutlineSharpIcon />
              </DivWrapper>
              <div>
                <h2>Business Enquiry</h2>
                <p>We follow up with you to explore your need and give you the solution</p>
              </div>
            </StyledGridWrapper>
            <StyledGridWrapper item xs={12} md={3}>
              <DivLayout>
                <SendIcon className="rotate" />
              </DivLayout>
              <div>
                <h2>Visualizes your ideas</h2>
                <p>
                  We precisely collect your requirements to execute a business analysis and create a project mock-up.
                </p>
              </div>
            </StyledGridWrapper>
            <StyledGridWrapper item xs={12} md={3}>
              <DivLayout>
                <RocketLaunchOutlinedIcon />
              </DivLayout>
              <div>
                <h2>Development</h2>
                <p>
                  We make a complete project development roadmap and set up a project management process for you to have
                  control over the process and regularly track progress.
                </p>
              </div>
            </StyledGridWrapper>
            <StyledGridWrapper item xs={12} md={3}>
              <DivLayout>
                <LightbulbIcon />
              </DivLayout>
              <div>
                <h2>Support Development</h2>
                <p>
                  Once your software up and running, we perform maintenance and are always ready to add extra features
                  to help you keep up with the fast-changing business landscape.
                </p>
              </div>
            </StyledGridWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default SectionProcess;

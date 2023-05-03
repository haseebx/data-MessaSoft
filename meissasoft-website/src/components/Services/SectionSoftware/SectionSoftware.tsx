import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Grid from '@mui/material/Grid';

import { StyledGrid, StyledLabel, Heading, Span, StyledButton } from './SectionSoftware.styles';

const SectionSoftware = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} xs={10}>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Grid item xs={12}>
              <StyledLabel>OUR SERVICES</StyledLabel>
            </Grid>
            <Grid item xs={12}>
              <Heading>Software Development Services For Your Innovative Ideas</Heading>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Span>
              We transform bold business ideas into exceptional digital products. Searching for a partner that will take
              the process of software development off your hands? You’ve come to the right place. We ideate, design, and
              develop data-driven digital products made to answer business challenges. We offer 360° services to
              smoothly guide you on your way to creating a seamless digital masterpiece.
            </Span>
            <StyledButton>
              <ArrowRightAltIcon style={{ color: 'white' }} />
              LEARN MORE
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default SectionSoftware;

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Divider, Grid } from '@mui/material';

import {
  StyledGrid,
  StyledLabel,
  Heading,
  StyledButton,
  Span,
  DivTitle,
  DivDescription,
} from './SectionExpertise.style';
const SectionExpertise = () => {
  return (
    <>
      <StyledGrid container>
        <Grid item md={8} sm={12} xs={12}>
          <Grid container>
            <Grid item md={6} sm={6} xs={12}>
              <Grid item md={6} sm={8} xs={12} lg={4}>
                <StyledLabel>EXPERTISE</StyledLabel>
              </Grid>
              <Heading>We Are Built By A Small Team Of Highly Focused</Heading>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <StyledButton>
                  <ArrowRightAltIcon style={{ color: 'white' }} />
                  LEARN MORE
                </StyledButton>
              </Grid>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Span>
                Our team can provide a wide range of mobile, web, desktop and enterprise software technology expertise
                across all major development environments, frameworks and platforms.
              </Span>
              <Divider />
              <Grid container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={4} md={4} display="flex" flexDirection="column">
                  <DivTitle>100%</DivTitle>
                  <DivDescription>Project On Time</DivDescription>
                </Grid>
                <Grid item xs={12} sm={4} md={4} display="flex" flexDirection="column">
                  <DivTitle>$2M</DivTitle>
                  <DivDescription>Create In Revenue</DivDescription>
                </Grid>
                <Grid item xs={12} sm={4} md={4} display="flex" flexDirection="column">
                  <DivTitle>20+</DivTitle>
                  <DivDescription>Five Star On Clutch</DivDescription>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledGrid>
    </>
  );
};

export default SectionExpertise;

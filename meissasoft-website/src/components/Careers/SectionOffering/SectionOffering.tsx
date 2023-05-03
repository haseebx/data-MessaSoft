import Grid from '@mui/material/Grid';

import { COLORS } from '@/constants/colors';

import { StyledGrid, Heading, Description, StyledDivider, StyledColorDiv } from './SectionOffering.style';

const SectionOffering = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} xs={12}>
        <Grid container>
          <Grid container display="flex" justifyContent="center">
            <Grid item md={3} xs={7} width="100%">
              <StyledDivider>What we are offering</StyledDivider>
            </Grid>
          </Grid>
          <Grid container display="flex" justifyContent="center" spacing={4} paddingTop="50px">
            <Grid item md={3} xs={12}>
              <Grid item xs={12}>
                <Heading>Friendly Environment</Heading>
                <StyledColorDiv color={COLORS.THEME_COLOR} />
                <Description>
                  We believe that excellence is not a destination but a journey of continuous improvement and we keenly
                  promote an open culture, encouraging feedback, and actively transforming it into action
                </Description>
              </Grid>
            </Grid>
            <Grid item md={3} xs={12}>
              <Grid item xs={12}>
                <Heading>Training</Heading>
                <StyledColorDiv color={COLORS.PINK_200} />
                <Description>
                  Employees are given opportunities to be trained on appropriate systems, processes and modules and
                  encouraged to discuss their career prospects with their Manager or the HR Department.
                </Description>
              </Grid>
            </Grid>
            <Grid item md={3} xs={12}>
              <Grid item xs={12}>
                <Heading>Global Exposure</Heading>
                <StyledColorDiv color={COLORS.THEME_COLOR} />
                <Description>
                  Global exposure at Meissaosft extends beyond geographical boundaries. This means working on
                  world-class projects on a global scale and exploring cutting-edge technologies.
                </Description>
              </Grid>
            </Grid>
            <Grid item md={3} xs={12}>
              <Grid item xs={12}>
                <Heading>Flexible Hours</Heading>
                <StyledColorDiv color={COLORS.PINK_200} />
                <Description>
                  We believe in completion of tasks rather than enforcing long hours of work with little productivity.
                  Our many work-life programs respond to the needs and aspirations of our employees while retaining fun
                  as a key element.
                </Description>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};
export default SectionOffering;

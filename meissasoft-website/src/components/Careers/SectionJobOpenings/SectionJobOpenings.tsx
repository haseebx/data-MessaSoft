import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import Collapsible from '@/components/core/Collapsible/Collapsible';
import { getAppDataSelector } from '@/store/app';

import { StyledGrid, StyledDivider, Heading, Span } from './SectionJobOpenings.style';

const SectionJobOpenings = () => {
  const { careers } = useSelector(getAppDataSelector);

  return (
    <StyledGrid container>
      <Grid item md={8} xs={12}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Grid item xs={7}>
              <StyledDivider>Recent Job Openings</StyledDivider>
            </Grid>
            <Heading> Join Us Today.</Heading>
            <Span>Let's boost your skills together.</Span>
          </Grid>
          <Grid item md={6} xs={12} display="flex" justifyContent="center">
            {careers.length === 0 ? (
              <p style={{ color: 'white', fontSize: 15 }}> No Job Opens </p>
            ) : (
              <Collapsible items={careers} isApply />
            )}
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default SectionJobOpenings;

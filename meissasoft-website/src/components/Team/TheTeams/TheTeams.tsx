import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import CardTeam from '@/components/core/CardTeam';
import { getAppDataSelector } from '@/store/app';
import { ITeam } from '@/store/app/types';

import { StyledGrid, Heading, Span1, DivTitle } from './TheTeams.style';

const TheTeams = () => {
  const { teams } = useSelector(getAppDataSelector);

  return (
    <StyledGrid container>
      <Grid item md={8} sm={8} xs={12}>
        <Grid container style={{ margin: '20px 0px 10px 0px' }}>
          <StyledGrid item xs={12} style={{ padding: '50px 0px 10px 0px' }}>
            <DivTitle>THE TEAMS</DivTitle>
          </StyledGrid>
          <StyledGrid item xs={12}>
            <Heading>Meet Awesome Team</Heading>
          </StyledGrid>
          <StyledGrid item xs={12}>
            <Span1>We Come Together As A Team To Achieve A Common Goal</Span1>
          </StyledGrid>
          <Grid container display="flex" justifyContent="center">
            <Grid item xs={12}>
              <Grid container spacing={3}>
                {teams.map((team: ITeam) => {
                  return (
                    <Grid item md={4} xs={12} key={team.id}>
                      <CardTeam {...team} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};
export default TheTeams;

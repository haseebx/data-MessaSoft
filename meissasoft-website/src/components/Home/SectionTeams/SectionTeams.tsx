import Link from 'next/link';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import CardTeam from '@/components/core/CardTeam';
import { getAppDataSelector } from '@/store/app';
import { ITeam } from '@/store/app/types';

import { StyledGrid, DivTitle, Heading, Span, StyledButton } from './SectionTeams.style';
const SectionTeams = () => {
  const { teams } = useSelector(getAppDataSelector);

  return (
    <StyledGrid container spacing={3}>
      <Grid item md={3} sm={12} xs={12} display="flex" flexDirection="column">
        <DivTitle>THE TEAMS </DivTitle>
        <Heading>Meet Awesome Team</Heading>
        <Span>Our passionate professionals execute a fast-paced workflow undertaking unique challenges</Span>
        <Link href="/team">
          <StyledButton>
            <ArrowRightAltIcon style={{ color: 'white' }} />
            SEE ALL TEAM
          </StyledButton>
        </Link>
      </Grid>
      <Grid item md={9} xs={12}>
        <Grid container spacing={3}>
          {teams
            .filter((team: ITeam) => team.isFeatured)
            .slice(0, 3)
            .map((team: ITeam) => {
              return (
                <Grid item md={4} xs={12} key={team.id}>
                  <CardTeam {...team} />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default SectionTeams;

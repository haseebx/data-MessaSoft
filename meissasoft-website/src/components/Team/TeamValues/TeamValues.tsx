import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Grid from '@mui/material/Grid';

import Collapsible from '@/components/core/Collapsible/Collapsible';

import { StyledGrid, StyledLabel, Heading, Span, StyledButton } from './TeamValues.style';
const TeamValues = () => {
  const items = [
    {
      title: 'Ownership over authority',
      description:
        'Check in with groups intermittently but encourage them to handle their own issues before coming to authorities for assistance.',
    },
    {
      title: 'Collaborative learning',
      description:
        'Provide opportunities for freshers to develop rapport and group cohesion through  icebreakers, team-building, and reflection exercises.',
    },
    {
      title: 'Clear growth path',
      description:
        'Assign roles to members of each group and change the roles periodically. For example, one can be the front end developer, another be the backend developer, another the team leader, and another the planner of next steps.',
    },
  ];
  return (
    <StyledGrid container spacing={2}>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container>
          <Grid item md={6} sm={6} xs={12} style={{ padding: '80px 0px 40px 0px' }}>
            <Grid item md={6} sm={8} xs={12} lg={5}>
              <StyledLabel>TEAM VALUES</StyledLabel>
            </Grid>
            <Heading> We are glad to have such a team with smarter minds.</Heading>
            <Span>
              The team uses its smarter skills to deliver outstanding results to its clients by sharing their mutual
              passion for information technology
            </Span>
            <StyledButton>
              <ArrowRightAltIcon style={{ color: 'white' }} />
              LEARN MORE
            </StyledButton>
          </Grid>
          <Grid item md={6} sm={12} xs={12} display="flex">
            <Collapsible items={items} />
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default TeamValues;

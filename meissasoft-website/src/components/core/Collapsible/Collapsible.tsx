import * as React from 'react';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { StyledGrid, StyledCard, StyledIcon } from './Collapsible.styles';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props {
  title: string;
  description: string;
  valid?: string;
  requirements?: string;
  isApply?: boolean;
  id?: number;
}

function CardCollapse({ title, description, valid, requirements, isApply }: Props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard expanded={expanded === true ? 'true' : 'false'}>
      <CardHeader
        avatar={<div>{title}</div>}
        action={
          <IconButton aria-label="settings">
            <CardActions disableSpacing>
              <ExpandMore expand={expanded} aria-expanded={expanded} aria-label="show more">
                <StyledIcon expanded={expanded === true ? 'true' : 'false'} />
              </ExpandMore>
            </CardActions>
          </IconButton>
        }
        onClick={handleExpandClick}
      />
      <Collapse in={expanded} timeout={500} unmountOnExit>
        <CardContent>
          <Typography>{description}</Typography>
          <br />
          {requirements && requirements.length > 0 && (
            <div>
              <Typography>Requirements:</Typography>
              <ul style={{ marginLeft: '-25px' }}>
                {requirements.split('.').map((requirement, index) => (
                  <li style={{ color: 'white' }} key={index}>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {valid && valid.length > 0 && <Typography>Status: {valid}</Typography>}
          {isApply && <Typography>Send Your Resume To: meissasoft.com</Typography>}
        </CardContent>
      </Collapse>
    </StyledCard>
  );
}
interface ICollapsible {
  items: Props[];
  isApply?: boolean;
}

export default function Collapsible({ items, isApply }: ICollapsible) {
  return (
    <StyledGrid container>
      {items.map((item: Props) => {
        return <CardCollapse key={item.title} {...item} isApply={isApply} />;
      })}
      ;
    </StyledGrid>
  );
}

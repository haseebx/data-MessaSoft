import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, styled } from '@mui/material';
import Card from '@mui/material/Card';

import { COLORS } from '@/constants/colors';

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.THEME_COLOR};
  flex-direction: column;
  cursor: pointer;
  padding-left: 5px;
  & .MuiCardHeader-root {
    padding: 0px;
  }

  & .MuiCardContent-root {
    padding: 0px 0px 10px 0px;
    p {
      color: white;
    }
  }
`;

export const StyledCard = styled(Card)<{ expanded: string }>`
  background-color: transparent;
  ${({ expanded }) =>
    expanded === 'true'
      ? `
      color: ${COLORS.RED_100};
      `
      : `
      color: ${COLORS.WHITE_100};
      `}

  width: 400px;
  border-bottom: 1px solid white;
  border-radius: 0px;
  box-shadow: none;
`;

export const StyledIcon = styled(ExpandMoreIcon)<{ expanded: string }>`
  ${({ expanded }) =>
    expanded === 'true'
      ? `
  color: ${COLORS.RED_100};
  `
      : `
  color: ${COLORS.WHITE_100};
  `}
`;

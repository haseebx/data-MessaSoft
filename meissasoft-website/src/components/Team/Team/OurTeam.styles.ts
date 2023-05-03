import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

import { COLORS } from '@/constants/colors';

export const StyledDivider = styled(Divider)`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  width: 150px;
  font-size: 16px;
  text-transform: uppercase;
  align-self: center;
  display: flex;
  &::before {
    border-top: thin solid ${COLORS.PINK_200};
  }
  &::after {
    border-top: thin solid ${COLORS.PINK_200};
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.span`
  font-size: 52px;
  font-weight: bolder;
  text-align: center;
`;
export const P = styled.span`
  font-size: 17px;
  font-weight: 20px;
  text-align: center;
  padding-left: 0px;
`;
export const DivLayout = styled.div`
  color: ${COLORS.WHITE_100};
  background-color: ${COLORS.THEME_COLOR_BLUE};
  // background-color:#94C1E6;
  min-height: 450px;
  width: 100%;
  padding: 0px 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

import { COLORS } from '@/constants/colors';

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const StyledDivider = styled(Divider)`
  width: 50%;
  color: ${COLORS.PINK_200};
  &::before {
    border-top: thin solid ${COLORS.PINK_200};
  }
  &::after {
    border-top: thin solid ${COLORS.PINK_200};
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bolder;
  text-align: center;
  margin: 0px !important;
`;
export const P = styled.span`
  font-size: 17px;
  font-weight: 20px;
  text-align: center;
  padding-left: 0px;
  margin: 0px !important;
`;
export const DivLayout = styled.div`
  color: ${COLORS.WHITE_100};
  background-color: ${COLORS.THEME_COLOR_BLUE};
  min-height: 450px;
  width: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

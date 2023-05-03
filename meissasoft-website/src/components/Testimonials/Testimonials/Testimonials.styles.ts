import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

import { COLORS } from '@/constants/colors';

export const StyledDivider = styled(Divider)`
  width: 100%;
  color: ${COLORS.PINK_200};
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
  background-color: ${COLORS.THEME_COLOR};
  min-height: 450px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

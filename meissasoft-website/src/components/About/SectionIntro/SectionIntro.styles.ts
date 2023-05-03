import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

import { COLORS } from '@/constants/colors';

export const StyledDivider = styled(Divider)`
  width: 100%;
  color: ${COLORS.PINK_200};
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  &::before {
    border-top: thin solid ${COLORS.PINK_200};
    width: 40px;
    margin-left: 20px;
  }
  &::after {
    border-top: thin solid ${COLORS.PINK_200};
    width: 40px;
    margin-left: 20px;
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
  justify-content: center;
  align-item: center;
  @media (max-width: 768px) {
    font-size: 42px;
    text-align: center;
    align-item: center;
  }
`;
export const P = styled.span`
  font-size: 17px;
  font-weight: 20px;
  text-align: center;
  justify-content: center;
  align-item: center;
`;
export const DivLayout = styled.div`
  color: ${COLORS.WHITE_100};
  background-color: ${COLORS.THEME_COLOR_BLUE};
  min-height: 450px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

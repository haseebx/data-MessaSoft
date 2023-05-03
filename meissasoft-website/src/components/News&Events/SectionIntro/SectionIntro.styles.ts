import styled from '@emotion/styled';
import { Divider, Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const StyledDivider = styled(Divider)`
  color: ${COLORS.PINK_200};
  font-weight: 600;
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
  font-size: 62px;
  font-weight: bolder;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 48px;
    text-align: center;
  }
`;
export const P = styled.span`
  font-size: 17px;
  font-weight: 20px;
  text-align: center;
  padding-left: 0px;
  text-align: center;
  justify-content: center;
  padding: 0px 20px 0px 20px;
  @media (max-width: 768px) {
    font-size: 19px;
  }
`;
export const DivLayout = styled.div`
  color: ${COLORS.WHITE_100};
  background-color: ${COLORS.THEME_COLOR};
  min-height: 450px;
  width: 100%;
  padding: 0px 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

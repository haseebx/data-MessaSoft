import styled from '@emotion/styled';
import { Grid, Divider } from '@mui/material';
import Button from '@mui/material/Button';

import { COLORS } from '@/constants/colors';

export const StyledGrid = styled(Grid)`
  padding: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.THEME_COLOR};
  margin-top: 100px;
`;

export const StyledDivider = styled(Divider)`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  align-self: center;
  display: flex;
  margin-bottom: 20px;
  &::before {
    border-top: thin solid ${COLORS.PINK_200};
  }
  &::after {
    border-top: thin solid ${COLORS.PINK_200};
  }
`;

export const Heading = styled.div`
  font-size: 48px;
  font-weight: bolder;
  text-align: left;
  line-height: 3.8rem;
  color: ${COLORS.WHITE_100};
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const StyledButton = styled(Button)`
  font-weight: bolder;
  margin-top: 0px;
  font-size: 11px;
  letter-spacing: 0.3rem;
  width: 30%;
  margin-bottom: 10px;
  height: 50px;
  background-color: #ff7d90;
  color: white;
  &:hover {
    background-color: pink;
  }
`;
export const Span = styled.p`
  font-size: 17px;
  font-weight: 20px;
  text-align: left;
  color: ${COLORS.WHITE_100};
  @media (max-width: 767px) {
    text-align: center;
  }
`;

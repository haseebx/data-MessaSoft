import styled from '@emotion/styled';
import { Grid, Divider } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const Container = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 600px) {
    .hide {
      display: none;
    }
  }
`;

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
  justify-content: center;
  align-item: center;
  text-align: center;
`;

export const Heading = styled.h3`
  font-size: 46px;
  font-weight: bolder;
  text-align: center;
  line-height: 3.3rem;
  margin: 20px 0px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bolder;
  padding-left: 5px;
  color: ${COLORS.THEME_COLOR};
`;

export const Description = styled.p`
  font-size: 15px;
  padding-left: 5px;
  color: ${COLORS.GREY_LABEL};
`;

export const DivCard = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 40px;
`;

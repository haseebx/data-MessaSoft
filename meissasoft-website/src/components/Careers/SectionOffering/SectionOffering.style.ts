import styled from '@emotion/styled';
import { Grid, Divider } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const Container = styled(Grid)`
  padding: 10px 10px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDivider = styled(Divider)`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  display: flex;
  &::before {
    border-top: thin solid ${COLORS.PINK_200};
  }
  &::after {
    border-top: thin solid ${COLORS.PINK_200};
  }
`;

export const StyledColorDiv = styled.div<{ color?: string }>`
  padding: 5px;
  margin: 10px 5px;
  background-color: ${(props) => props.color};
`;

export const Description = styled.p`
  font-size: 17px;
  padding-left: 5px;
  font-weight: 20px;
`;

export const StyledGrid = styled(Grid)`
  justify-content: center;
  align-item: center;
  display: flex;
  padding: 50px 0px;
  background-color: ${COLORS.GREY_40};
`;

export const Heading = styled.span`
  font-size: 25px;
  font-weight: bolder;
  text-align: center;
  line-height: 3.3rem;
  padding-left: 5px;
`;

export const Images = styled.img`
  width: 100%;
  height: 350px;
  &:hover {
  }
`;

export const DivCard = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 40px;
`;

import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const Container = styled(Grid)`
  background-color: ${COLORS.GREY_40};
  padding: 0px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DivTitle = styled.div`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  position: relative;
  padding-left: 55px;
  padding-right: 55px;
  text-align: center;
  max-width: 300px;
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: -6%;
    top: 45%;
    position: absolute;
  }
  &::before {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 80%;
    top: 45%;
    position: absolute;
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Heading = styled.span`
  font-weight: bolder;
  font-size: 40px;
  text-align: center;
`;

export const StyledLabel = styled.h3`
  color: ${COLORS.BLACK_100};
  font-weight: bold;
  font-size: 100;
`;

export const Span = styled.p`
  color: ${COLORS.PINK_200};
  font-size: 13px;
  font-weight: bold;
  padding-bottom: 100px;
`;

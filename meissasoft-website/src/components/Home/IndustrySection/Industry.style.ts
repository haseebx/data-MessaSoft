import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const Heading = styled.p`
  margin: 0;
  font-size: 50px;
  font-weight: 600;
  text-align: start;
  @media (max-width: 400px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;
export const H3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;
export const Div = styled.div`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  position: relative;
  padding-left: 0px;
  padding-right: 80px;
  text-align: center;
  max-width: 300px;
  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 0%;
    top: 50%;
    position: absolute;
  }
  @media (max-width: 767px) {
    color: ${COLORS.PINK_200};
    font-weight: 600;
    position: relative;
    padding-left: 60px;
    padding-right: 0px;
    text-align: center;
    max-width: 300px;
    &::after {
      content: '';
      display: block;
      width: 70px;
      height: 1px;
      background: ${COLORS.PINK_200};
      left: 15%;
      top: 50%;
      position: absolute;
    }
  }
`;
export const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  background-color: ${COLORS.PINK_200};
  color: ${COLORS.WHITE_100};
  &:hover {
    background-color: ${COLORS.PINK_100};
  }
  @media (max-width: 767px) {
    margin-top: 30px;
    text-align: center;
    align-item: center;
    width: 100%;
    justify-contant: center;
    padding: 2px 4px;
  }
`;

export const DivTitle = styled.div`
  font-size: 22px;
  margin-bottom: 25px;
  font-weight: 600;
  margin-bottom: 30px;
  color: ${COLORS.BLACK_100};
  font-family: barlow;
  @media (max-width: 767px) {
    margin-top: 30px;
    text-align: center;
  }
`;
export const DivDescription = styled.div`
  color: ${COLORS.GREY_TEXT};
  font-size: 16px;
  font-family: barlow;
  @media (max-width: 767px) {
    margin-top: 15px;
    text-align: center;
  }
`;

export const StyledGrid = styled(Grid)`
  padding-top: 25px;
  width: 200px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledGridWhite = styled(Grid)`
  height: 100%;
  color: ${COLORS.WHITE_100};
  padding: 50px 50px 96px 30px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

import styled from '@emotion/styled';
import { Grid, Button } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const Container = styled(Grid)`
  padding: 140px 140px 140px 130px;
  background-color: ${COLORS.GREY_40};
  @media (max-width: 768px) {
    padding: 40px 20px 40px 0px;
  }
`;
export const DivTitle = styled.div`
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
    width: 60px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: -40%;
    top: 50%;
    position: absolute;
  }
  &::before {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 60%;
    top: 50%;
    position: absolute;
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin: 30px 0px 0px 80px;
    &::before {
      width: 30px;
    }
    &::after {
      width: 30px;
      left: -20%;
    }
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    justify-content: center;
    margin: 20px 30px 0px 50px;
    align-items: center;
  }
`;

export const Heading = styled.span`
  font-weight: bolder;
  font-size: 50px;
  padding: 20px 0px 40px 0px;
  line-height: 3.9rem;
  @media (max-width: 768px) {
    justify-content: center;
    align-item: center;
    font-size: 40px;
    padding: 0px 0px 15px 0px;
    line-height: 3rem;
  }
`;
export const Span = styled.p`
  font-size: 18px;
  font-weight: 20px;
  text-align: center;
  justify-content: center;
  align-item: center;
  margin-top: -15px;
  color: ${COLORS.GREY_TEXT};
  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
    align-item: center;
  }
`;
export const StyledButton = styled(Button)`
  width: 25%;
  height: 50px;
  letter-spacing: 0.2rem;
  background-color: ${COLORS.PINK_200};
  color: white;
  &:hover {
    background-color: pink;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

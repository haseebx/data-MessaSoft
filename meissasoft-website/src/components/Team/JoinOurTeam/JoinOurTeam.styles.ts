import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const Container = styled(Grid)`
  padding: 0px 0px 0px 0px;
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
  margin: 50px 0px;
`;

export const Heading = styled.p`
  font-weight: bolder;
  font-size: 40px;
  margin-top: -40px;
  text-align: center;
`;
export const Span1 = styled.p`
  font-size: 17px;
  font-weight: 20px;
  margin-top: -30px;
  text-align: center;
  margin-top: -90px;
  text-align: left;
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
  @media (max-width: 767px) {
    text-align: center;
    width: 60%;
    margin-bottom: 20px;
  }
`;

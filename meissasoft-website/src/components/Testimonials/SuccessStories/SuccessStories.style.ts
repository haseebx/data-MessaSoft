import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

import { COLORS } from '@/constants/colors';

export const StyledGrid = styled(Grid)`
  padding: 80px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledLabel = styled.div`
  color: ${COLORS.PINK_200};
  padding-bottom: 30px;
  position: relative;
  text-align: center;
  left: 20px;
  max-width: 390px;
  &::before {
    content: '';
    display: block;
    width: 45px;
    height: 1px;
    background: ${COLORS.PINK_200};
    top: 24%;
    position: absolute;
  }
  @media (max-width: 767px) {
    color: ${COLORS.PINK_200};
    padding-bottom: 30px;
    position: relative;
    margin-left: 120px;
    text-align: center;
    max-width: 200px;
    &::before {
      content: '';
      display: block;
      width: 60px;
      height: 1px;
      margin-left: -30px;
      background: ${COLORS.PINK_200};
      top: 24%;
      position: absolute;
    }
  }
`;
export const Heading = styled.div`
  font-size: 45px;
  font-weight: bolder;
  text-align: left;
  margin-left: 20px;
  line-height: 3.8rem;
  color: ${COLORS.BLACK_100};
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
  left: 20px;
  margin-bottom: 10px;
  height: 50px;
  background-color: #ff7d90;
  color: white;
  &:hover {
    background-color: pink;
  }
  @media (max-width: 767px) {
    margin-top: 0px;
    text-align: center;
    width: 70%;
    left: 15%;
    right: 15%;
    margin-bottom: 20px;
  }
`;
export const Span = styled.p`
  font-size: 17px;
  font-weight: 20px;
  text-align: left;
  margin-left: 20px;
  color: ${COLORS.BLACK_100};
  @media (max-width: 767px) {
    text-align: center;
  }
`;

import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const Container = styled(Grid)`
  margin-top: 100px;
  padding-bottom: 50px;
`;
export const DivTitle = styled.div`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  position: relative;
  padding-left: 0px;
  padding-right: 80px;
  margin-left: 40px;
  text-align: center;
  max-width: 300px;
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: -35%;
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
    margin: 30px 0px 0px 80px;
    align-items: center;
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
    margin: 0px 20px 0px 0px;
  }
`;

export const Heading = styled.span`
  font-weight: bolder;
  font-size: 50px;
`;
export const Span = styled.p`
  font-size: 18px;
  font-weight: 20px;
  text-align: center;
  justify-content: center;
  align-item: center;
  color: ${COLORS.GREY_TEXT};
`;

export const StyledGridI = styled(Grid)`
  margin-top: -130px;
  @media (max-width: 768px) {
    margin-top:0px;
    margin-bottom:90px;
`;
export const Image = styled.img`
  text-align: center;
  padding: 10px 10px 10px 10px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;
export const Span1 = styled.span`
  font-weight: bold;
  display: flex;
  font-size: 19px;
  text-align: center;
  justify-content: center;
  align-item: center;
  padding: 0px 10px 0px 30px;
  color: ${COLORS.GREY_TEXT};

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding: 0px;
  }
`;
export const Span2 = styled.span`
  font-weight: bold;
  font-size: 19px;
  text-align: center;
  justify-content: center;
  align-item: center;
  padding: 180px 0px 0px 140px;
  color: ${COLORS.GREY_TEXT};
  @media (max-width: 768px) {
    justify-content: center;
    align-item: center;
    padding: 0 0 0 95px;
  }
`;
export const Span3 = styled.p`
  font-size: 18px;
  font-weight: 20px;
  text-align: center;
  justify-content: center;
  color: ${COLORS.GREY_TEXT};
  display: flex;
`;

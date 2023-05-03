import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { COLORS } from '@/constants/colors';

export const DivLayout = styled.div`
  color: ${COLORS.WHITE_100};
  display: flex;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Div = styled.div`
  min-height: 200px;
  color: ${COLORS.WHITE_100};
`;
export const H1 = styled.h1`
  font-size: 44px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const DivCenter = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    justify-items: center;
  }
`;
export const DivColoumn = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 767px) {
    align-items: center;
  }
`;
export const H4 = styled.h4`
  margin: 0px;
  font-size: 18 px;
  font-weight: 200;
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
  }
`;

export const StylyedLabel = styled.div`
  color: ${COLORS.PINK_200};
  position: relative;
  padding: 50px 50px 0 120px;
  text-align: center;
  max-width: 300px;
  &::before {
    content: '';
    display: block;
    width: 110px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 0;
    top: 90%;
    position: absolute;
  }
`;

export const StyledGridImage = styled(Grid)`
  min-height: 495px;
  position: relative;
`;

export const DivBottom = styled.div`
  width: 30%;
  height: 110px;
  background-color: ${COLORS.WHITE_100};
  position: absolute;
  margin: -110px 0 0 10%;
  padding: 20px;
  @media (max-width: 1024px) {
    width: 50%;
    margin: -110px 0 0 0;
  }
`;

export const SliderName = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${COLORS.BLACK_100};
  text-align: center;
  margin-top: 14px;
`;

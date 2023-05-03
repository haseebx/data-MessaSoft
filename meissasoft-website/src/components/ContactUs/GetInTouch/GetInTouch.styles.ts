import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

import { COLORS } from '@/constants/colors';

import FieldInput from '../../core/FieldInput';

export const DivTitle = styled.p`
  color: ${COLORS.PINK_200};
  position: relative;
  padding: 10px 0px 0px 0px;
  text-align: center;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
  max-width: 230px;
  &::before {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: ${COLORS.PINK_200};
    top: 65%;
    position: absolute;
  }
  @media (max-width: 767px) {
    color: ${COLORS.PINK_200};
    position: relative;
    padding: 40px 0px 0px 40px;
    text-align: center;
    text-align: center;
    align-items: center;
    justify-content: center;
    max-width: 390px;
    &::before {
      content: '';
      display: block;
      width: 45px;
      height: 1px;
      text-align: center;
      background: ${COLORS.PINK_200};
      left: 110px;
      top: 80%;
      position: absolute;
    }
  }
`;
export const Heading = styled.p`
  font-size: 40px;
  font-weight: bolder;
  line-height: 3.5rem;
  margin: 0px 0px !important;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const StyledImageDiv = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
`;
export const H3 = styled.span`
  font-size: 26px;
  font-weight: bolder;
  text-align: left;
`;
export const Span = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 20px;
  text-align: left;
`;
export const Span1 = styled.div`
  justify-content: left;
  text-align: left;
  align-item: left;
  @media (max-width: 767px) {
    text-align: center;
    padding: 20px;
  }
`;
export const P3 = styled.p`
  display: flex;
  align-items: center;
  text-align: left;
  & svg {
    color: #999999;
    font-size: 19px;
  }
`;
export const P5 = styled.span`
  font-size: 18px;
  text-align: left;
  margin-left: 10px;
`;
export const StyledGrid = styled(Grid)`
  justify-content: center;
  align-item: center;
  display: flex;
  margin-top: 5%;
`;
export const Div = styled.div`
  background: ${COLORS.WHITE_100};
  color: ${COLORS.BLACK_100};
  width: 57%;
  height: 230px;
  padding: 10px 10px 20px 20px;
  position: relative;
  bottom: -370px;
  left: 43%;
`;

export const StyledInput = styled(FieldInput)`
  width: 100%;
  height: 20px;
  margin-top: 30px;
  text-align: center;
  justify-content: center;
  align-item: center;
`;
export const TextareaInput = styled(FieldInput)`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  background-color: ${COLORS.PINK_100};
`;
export const StyledButton = styled(Button)`
  margin-bottom: 20%;
  height: 50px;
  width: 100%;
  background-color: ${COLORS.PINK_200};
  color: ${COLORS.WHITE_100};
  &:hover {
    background-color: ${COLORS.PINK_100};
  }
  @media (max-width: 767px) {
    align-items: center;
    width: 80%;
    left: 10%;
    right: 10%;
  }
`;

import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

import { COLORS } from '@/constants/colors';

import FieldInput from '../../core/FieldInput';

export const StyledGrid = styled(Grid)`
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GREY_40};
`;
export const StyledInput = styled(FieldInput)`
  width: 100%;
  height: 20px;
  margin: 20px 0px 10px 0px;
  background-color: ${COLORS.GREY_40};
`;
export const Heading = styled.div`
  font-size: 40px;
  font-weight: bolder;
  text-align: left;
  line-height: 3.8rem;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const Span = styled.p`
  font-size: 18px;
  font-weight: 100px;
  text-align: left;
  color: ${COLORS.GREY_TEXT};
`;
export const P = styled.div`
  font-size: 18px;
  font-weight: 10px;
  text-align: left;
  color: ${COLORS.GREY_TEXT};
`;
export const TextAreaInput = styled.textarea`
  width: 100% !important;
  margin-top: 30px;
  padding: 10px;
  color: ${COLORS.GREY_TEXT};
  border-radius: 5px;
  background-color: ${COLORS.GREY_4};
  font-size: 15px;
  font-style: normal;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  resize: vertical;
`;
export const StyledButton = styled(Button)`
  height: 50px;
  width: 50%;
  margin-top: 20px;
  letter-spacing: 0.2rem;
  background-color: ${COLORS.PINK_200};
  color: ${COLORS.WHITE_100};
  &:hover {
    background-color: ${COLORS.PINK_100};
  }
`;
export const P1 = styled.div`
  color: ${COLORS.PINK_200};
  font-size: 13px;
  font-weight: bold;
  margin-top: 8px;
`;
export const DivStyled = styled.div`
  color: ${COLORS.PINK_200};
  font-size: 13px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
export const Para = styled.div`
  color: ${COLORS.PINK_200};
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const Para1 = styled.div`
  color: ${COLORS.PINK_200};
  font-size: 13px;
  font-weight: bold;
`;
export const H3 = styled.div`
  font-size: 26px;
  font-weight: bolder;
  margin: 30px 0px 30px 0px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const P2 = styled.div`
  font-size: 18px;
  font-weight: 10px;
  color: ${COLORS.GREY_TEXT};
`;
export const DivLayout = styled.div`
  height: 55px;
  width: 100%;
  font-size: 22px;
  font-weight: bolder;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.GREY_LIGHT_10};
  background-color: ${COLORS.GREY_40};
  color: ${COLORS.GREY_TEXT};
  &:hover {
    font-weight: bolder;
    color: ${COLORS.BLACK_100};
  }
`;
export const H1 = styled.div`
  font-size: 26px;
  font-weight: bolder;
  text-align: left;
  margin-left: 20px;
  line-height: 2.5rem;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const P3 = styled.p`
  color: ${COLORS.PINK_200};
  font-size: 12px;
  font-weight: bold;
  margin-right: 0px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

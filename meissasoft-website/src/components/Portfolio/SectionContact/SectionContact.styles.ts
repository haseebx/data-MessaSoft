import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import FieldInput from '@/components/core/FieldInput';
import { COLORS } from '@/constants/colors';

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
  color: white;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

export const StyledLocationGrid = styled(Grid)`
  background: ${COLORS.THEME_COLOR_BLUE};
  padding: 30px;
  @media (max-width: 900px) {
    .location,
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 20px;
    }
    margin-left: 0px;
  }
`;
export const StyledDivider = styled(Divider)`
  width: 100%;
  color: ${COLORS.PINK_200};
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  &::before {
    border-top: thin solid ${COLORS.PINK_200};
    width: 40px;
    margin-left: 20px;
  }
  &::after {
    border-top: none;
  }
`;

export const Heading = styled.div`
  font-size: 20px;
  padding-left: 8px;
  font-weight: bolder;
`;
export const P = styled.div`
  font-size: 17px;
  font-weight: 20px;
  color: ${COLORS.GREY_LABEL};
  padding-left: 8px;
  font-weight: 600;
`;

export const DivWrapper = styled.div`
  display: flex;
  border-radius: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: ${COLORS.PINK_200};
  color: ${COLORS.WHITE_100};
  width: 50px;
  padding: 13px;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${COLORS.PINK_200};
  &: hover {
    color: ${COLORS.GREY_90};
  }
  & svg {
    font-size: 25px;
  }
`;

export const DivLayout = styled.div`
  display: flex;
  border-radius: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: ${COLORS.PINK_200};
  color: ${COLORS.PINK_200};
  padding: 15px 16px 15px 17px;
  width: 70px;
  transition: transform 0.2s;
  .rotate {
    transform: rotate(-50deg);
  }
  &: hover {
    -ms-transform: scale(0.78); /* IE 9 */
    -webkit-transform: scale(0.9); /* Safari 3-8 */
    transform: scale(0.9);
  }
  & svg {
    font-size: 35px;
  }
`;

export const DivTitle = styled.div`
  color: ${COLORS.PINK_200};
  position: relative;
  padding: 10px 0px 0px 20px;
  text-align: center;
  max-width: 300px;
  &::before {
    content: '';
    display: block;
    width: 45px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 35px;
    top: 80%;
    position: absolute;
  }
`;

export const Span = styled.span`
  justify-content: left;
  text-align: left;
  align-item: left;
`;

export const StyledInput = styled(FieldInput)`
  height: 20px;
  margin-top: 30px;
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
  &:focus {
    outline: none !important;
    border-color: ${COLORS.PINK_200};
  }
`;
export const StyledButton = styled(Button)`
  margin-bottom: 20%;
  height: 50px;
  width: 13%;
  background-color: ${COLORS.PINK_200};
  color: ${COLORS.WHITE_100};
  &:hover {
    background-color: ${COLORS.PINK_100};
  }
  @media (max-width: 767px) {
    align-items: center;
    width: 100%;
  }
`;

export const StyledContactGrid = styled(Grid)`
  margin-top: 50px;
  @media (max-width: 900px) {
    .location,
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 20px;
    }
    margin-left: 0px;
  }
`;

export const HeadingStarted = styled.h1`
  font-size: 40px;
  font-weight: bolder;
  line-height: 3.5rem;
  margin: 15px 0px 0px 0px !important;
  color: ${COLORS.BLACK_100};
  padding-right: 50px;
`;

export const ErrorMessage = styled.span`
  color: ${COLORS.PINK_200};
  font-size: 12px;
`;

import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

import { COLORS } from '@/constants/colors';

export const FieldInputStyled = styled(TextField)`
  width: 100%;
  color: ${COLORS.GREY_TEXT};
  &.MuiTextField-root > div {
    border-radius: 5px;
    background-color: ${COLORS.GREY_4};
    font-size: 15px;
    font-style: normal;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }
  &.error {
    border-color: ${COLORS.RED_100};
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-width: 0.5px;
      border-color: ${COLORS.BLUE_200};
    }
  }
  & .MuiInputBase-input {
    height: 18px;
    font-weight: 600;
  }
`;

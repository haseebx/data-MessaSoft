import Image from 'next/image';

import styled from '@emotion/styled';
import { Divider, Grid } from '@mui/material';

import FieldInput from '@/components/core/FieldInput';
import { COLORS } from '@/constants/colors';

export const DivLayout = styled.div`
  color: ${COLORS.WHITE_100};
  display: flex;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Div = styled(Grid)`
  background-color: ${COLORS.THEME_COLOR_BLUE};
  padding: 100px 0px 0px 0px;
  display: flex;
  justify-content: center;
`;

export const DivCenter = styled(Grid)`
  color: ${COLORS.WHITE_100};
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
  margin: 5px;
  cursor: pointer;
`;
export const StyledImage = styled(Image)`
  &:hover {
    filter: brightness(0.5);
    transition: 0.5s ease;
  }
`;

export const StyledGridImage = styled(Grid)`
  margin: 0px !important;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 18px;
  background-color: ${COLORS.PINK_200};
  color: ${COLORS.WHITE_100};
  border-radius: 5px;
  &:hover {
    background-color: ${COLORS.PINK_100};
  }
  outline: none;
`;
export const StyledP = styled.p`
  text-align: center;
  color: white;
  font-size: 12px;
  margin: 0px 0px 5px 0px;
`;

export const StyledInput = styled(FieldInput)`
  width: 100%;
  font-size: 16px;
`;

export const StyledErrorP = styled.p`
  color: red;
  padding: 25px 0 0 15px;
`;

export const StyledDivider = styled(Divider)`
  border-color: grey;
  padding: 10px 10% 10px 10%;
`;

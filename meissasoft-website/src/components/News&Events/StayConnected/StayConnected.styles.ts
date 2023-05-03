import styled from '@emotion/styled';
import { Divider, Grid } from '@mui/material';
import Button from '@mui/material/Button';

import FieldInput from '@/components/core/FieldInput';
import { COLORS } from '@/constants/colors';

export const Container = styled(Grid)`
  padding: 140px 140px 140px 130px;
  @media (max-width: 768px) {
    padding: 40px 20px 40px 0px;
  }
`;

export const StyledDivider = styled(Divider)`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  &::before {
    border-top: thin solid ${COLORS.PINK_200};
  }
  &::after {
    border-top: thin solid ${COLORS.PINK_200};
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`;

export const Heading = styled.span`
  font-weight: bolder;
  font-size: 50px;
`;

export const Span = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  align-item: center;
  color: ${COLORS.GREY_TEXT};
  margin: 0px !important;
`;
export const StyledButton = styled(Button)`
  width: 100%;
  padding: 13px;
  letter-spacing: 0.2rem;
  background-color: ${COLORS.PINK_200};
  color: ${COLORS.WHITE_100};
  &:hover {
    background-color: ${COLORS.PINK_100};
  }
`;
export const StyledP = styled.p`
  text-align: center;
  color: ${COLORS.GREY_100};
`;

export const StyledInput = styled(FieldInput)`
  width: 100%;
  font-size: 16px;
  border-display: none;
  margin: 0px !important;
`;

export const StyledErrorP = styled.p`
  color: ${COLORS.PINK_200};
  text-align: left;
  margin: 0px;
`;

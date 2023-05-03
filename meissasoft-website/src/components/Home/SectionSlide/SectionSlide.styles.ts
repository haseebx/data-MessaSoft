import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';
export const Container = styled.div``;

export const ImageContainer = styled.div`
  min-height: 480px;
  filter: brightness(90%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const DivLayout = styled(Grid)`
  color: ${COLORS.WHITE_100};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 480px;
  z-index: 999;
  @media (max-width: 390px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const DivColoumn = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 390px) {
    align-items: center;
  }
`;
export const DivTitle = styled.div`
  font-size: 68px;
  font-weight: 600;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const DivDescription = styled.div`
  color: ${COLORS.WHITE_100};
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const Span = styled.div`
  color: ${COLORS.WHITE_100};
  font-size: 18px;
  font-weight: 400;
  // border: 1px solid red;
  margin-bottom: 15%;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';
export const Container = styled(Grid)`
  margin: 100px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageContainer = styled.div`
  min-height: 500px;
  width: 100%;
  filter: brightness(90%);
  display: flex;
  justify-content: center;
  position: relative;
`;
export const DivLayout = styled(Grid)`
  color: ${COLORS.WHITE_100};
  display: flex;
  align-items: flex-end;
  z-index: 999;
  min-height: 500px;
`;
export const DivTitle = styled.div`
  font-size: 68px;
  font-weight: 400;
  margin-left: 20px;
  @media (max-width: 767px) {
    text-align: center;
    align-item: center;
    justify-content: center;
  }
`;
export const DivDescription = styled.div`
  color: ${COLORS.WHITE_100};
  font-size: 18px;
  margin-left: 20px;
  @media (max-width: 767px) {
    text-align: center;
    align-item: right;
    justify-content: right;
  }
`;
export const Span = styled.div`
  color: ${COLORS.WHITE_100};
  font-size: 18px;
  padding-top: 20px;
  font-weight: 400;
  margin-bottom: 15%;
  @media (max-width: 767px) {
    text-align: center;
    padding-top: 20px;
    align-item: right;
    justify-content: center;
  }
`;

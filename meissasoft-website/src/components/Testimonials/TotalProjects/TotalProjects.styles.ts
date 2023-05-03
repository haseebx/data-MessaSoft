import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';
export const StyledGrid = styled(Grid)`
  justify-content: center;
  align-item: center;
  text-align: center;
  padding: 45px 0px 50px 0px;
`;
export const Image = styled.div`
  min-height: 580px;
  filter: brightness(90%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const DivLayout = styled(Grid)`
  color: ${COLORS.WHITE_100};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 1px solid red;
  min-height: 580px;
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
  font-size: 66px;
  color: ${COLORS.BLACK_100};
  text-align: center;
  margin-left: 22px;
  font-weight: 400;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const DivDescription = styled.div`
  color: ${COLORS.BLACK_100};
  font-size: 16px;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const Span = styled.p`
  color: ${COLORS.BLACK_100};
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 15%;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

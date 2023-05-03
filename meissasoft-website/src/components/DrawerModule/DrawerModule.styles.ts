import styled from '@emotion/styled';
import { Box, Grid, Typography, SwipeableDrawer } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const LinkStyled = styled(Box)`
  align-items: flex-start;
`;
export const DisableStyled = styled(Box)`
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const StyledLocationGrid = styled(Grid)`
  overflow: none;
  margin-top: 20px;

  @media (max-width: 900px) {
    .location,
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    margin-left: 0px;
  }
`;
export const DivService = styled.div`
  margin-left: 35px;
  font-size: 30px;
  font-weight: bolder;
`;
export const DivTitle = styled.div`
  margin-top: 50px;
  margin-left: 35px;
`;
export const DivHeading = styled.div`
  font-size: 35px;
  font-weight: bolder;
`;
export const DivFollow = styled.div`
  font-size: 25px;
  font-weight: bolder;
  margin-left: 10px;
`;
export const P1 = styled.div`
  font-weight: bolder;
`;
export const DivServices = styled.div`
  margin-left: 20px;
  color: white;
`;
export const DivWrapper = styled.div`
  display: flex;
  border-radius: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: ${COLORS.PINK_200};
  color: ${COLORS.PINK_200};
  width: 50px;
  padding: 13px;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
  text-align: center;
  &: hover {
    background-color: ${COLORS.WHITE_100};
  }
  & svg {
    font-size: 25px;
  }
`;
export const HoverTypo = styled(Typography)`
  color: white;
  cusror: pointer;
  margin-left: -32px;
  margin-bottom: -6px;
  font-weight: bolder;
  &:hover {
    align-content: flex-end;
    color: #ff7d90;
    text-decoration-thickness: 14px;
  }
`;

export const StyledSwipeableDrawer = styled(SwipeableDrawer)``;

import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { COLORS } from '@/constants/colors';

export const ShadowBox = styled(Box)``;

export const MediaQueryStyledBox = styled(ShadowBox)`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${COLORS.WHITE_100};
  #menu {
    display: none;
  }
  @media screen and (max-width: 850px) {
    #header {
      display: none;
      height: 7rem;
      background-color: ${COLORS.WHITE_100};
    }
    #drawer {
      display: none;
    }
    #menu {
      display: flex;
    }
    #menuitems {
      display: none;
    }
  }
`;

export const HoverTypo = styled(Typography)`
  border-bottom: 2px solid white;
  cursor: pointer;
  text-transform: UPPERCASE;
  &:hover {
    color: ${COLORS.PINK_200};
    text-decoration-thickness: 2px;
    border-bottom: 2px solid ${COLORS.PINK_200};
  }
`;

export const HoverDropDownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  &:hover {
    & svg {
      color: ${COLORS.PINK_200};
    }
  }
  &:hover #content {
    display: flex;
    margin-top: 20px;
  }
`;

export const HoverDropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${COLORS.WHITE_100};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  flex-direction: column;
  padding: 10px 30px 30px 30px;
`;

export const HoverText = styled(Typography)`
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    color: ${COLORS.PINK_200};
    text-decoration-thickness: 2px;
  }
`;
export const HeaderStyled = styled.div`
  font-size: 38px;
  font-weight: bolder;
  margin-left: 10px;
`;

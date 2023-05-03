import styled from '@emotion/styled';
import { Box, Grid, MenuItem, Typography } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const MarginTopStyled = styled(Grid)`
  @media screen and (max-width: 850px) {
    #demo-positioned-menu {
      margin-top: 47px;
      maxidth: calc(100% - 32px);
    }
  }
`;
export const DropDownWidthStyled = styled(Box)`
  width: 100%,
  transform: 'translateY(47px)',
`;
export const HoverTypo = styled(MenuItem)`
  &:hover {
    color: #ff7d90;
    text-decoration-thickness: 2px;
  }
`;

export const DivStyledPages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & svg {
    margin-top: 13px;
    margin-right: 10px;
    &: hover {
      color: ${COLORS.PINK_200};
    }
  }
`;

export const DivStyledPagesDropDown = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: -10px;
`;

export const HoverText = styled(Typography)`
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    color: ${COLORS.PINK_200};
    text-decoration-thickness: 2px;
  }
`;

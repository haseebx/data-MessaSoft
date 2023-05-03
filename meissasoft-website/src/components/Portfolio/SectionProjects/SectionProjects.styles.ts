import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';

import { COLORS } from '@/constants/colors';

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding-bottom: 150px;
  background-color: ${COLORS.GREY_40};
  padding-top: 150px;
  .back {
    background-color: yellow;
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

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bolder;
  margin-left: 15px;
  margin-top: 0px !important;
`;
export const P = styled.span`
  font-size: 17px;
  font-weight: 20px;
  text-align: center;
  padding-left: 0px;
  margin: 0px !important;
`;

export const DivLayout = styled.div`
  color: ${COLORS.WHITE_100};
  background-color: ${COLORS.THEME_COLOR};
  min-height: 450px;
  width: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  span {
    height: 430px !important;
  }
`;

export const StyledTabs = styled(Tabs)`
  .css-1apqa8k-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: ${COLORS.THEME_COLOR_BLUE};
  }
`;

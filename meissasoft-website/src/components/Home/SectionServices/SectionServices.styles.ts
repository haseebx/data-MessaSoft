import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

import { COLORS } from '@/constants/colors';

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 150px;
  background-color: ${COLORS.GREY_40};
  padding-top: 80px;
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
  background-color: ${COLORS.THEME_COLOR_BLUE};
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

export const StyledMobileAppGrid = styled(Grid)`
  width: 100%;
  perspective: 1000px;
  &:hover .app-container {
    transform: rotateY(180deg);
  }
`;

export const StyledMobileAppContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 430px !important;
`;

export const StyledMobileAppFront = styled.div`
  color: black;
  position: absolute;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  span {
    height: 430px !important;
  }
`;

export const StyledMobileAppBack = styled.div`
  background: ${COLORS.THEME_COLOR_BLUE};
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 430px !important;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform-style: preserve-3d;
  span {
    padding: 60px;
    font-size: 13px;
    text-align: center;
    transform: translateZ(200px);
  }
`;

export const StyledMobileApp = styled.div`
  width: 100%;
  span {
    height: 430px !important;
  }
`;

export const StyledMobileAppDescription = styled.div`
  width: 100%;
  span {
    height: 430px !important;
  }
`;

export const StyledImageDescription = styled.div`
  background-color: #ff7d90;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 50px 20px;
  color: ${COLORS.WHITE_100};
`;

export const StyledWebAppGrid = styled(Grid)`
  width: 100%;
  perspective: 1000px;
  &:hover .web-container {
    transform: rotateY(180deg);
  }
`;

export const StyledWebAppContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 360px !important;
`;

export const StyledWebAppFront = styled.div`
  color: black;
  position: absolute;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  span {
    height: 360px !important;
  }
`;

export const StyledWebAppBack = styled.div`
  background: ${COLORS.THEME_COLOR_BLUE};
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 360px !important;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform-style: preserve-3d;
  span {
    padding: 100px;
    font-size: 13px;
    text-align: center;
    transform: translateZ(200px);
  }
`;

export const StyledBackendDevelopGrid = styled(Grid)`
  width: 100%;
  perspective: 1000px;
  &:hover .it-container {
    transform: rotateY(180deg);
  }
`;

export const StyledBackendDevelopContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 360px !important;
`;

export const StyledBackendDevelopFront = styled.div`
  color: black;
  position: absolute;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  span {
    height: 360px !important;
  }
`;

export const StyledBackendDevelopBack = styled.div`
  background: ${COLORS.THEME_COLOR_BLUE};
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 360px !important;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform-style: preserve-3d;
  span {
    padding: 60px;
    font-size: 13px;
    text-align: center;
    transform: translateZ(200px);
  }
`;

export const StyledDevopsGrid = styled(Grid)`
  width: 100%;
  perspective: 1000px;
  &:hover .devops-container {
    transform: rotateY(180deg);
  }
`;

export const StyledDevopsContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 360px !important;
`;

export const StyledDevopsFront = styled.div`
  color: black;
  position: absolute;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  span {
    height: 360px !important;
  }
`;

export const StyledDevopsBack = styled.div`
  background: ${COLORS.THEME_COLOR_BLUE};
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 360px !important;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform-style: preserve-3d;
  span {
    padding: 60px;
    font-size: 13px;
    text-align: center;
    transform: translateZ(200px);
  }
`;

export const StyledLocationGrid = styled(Grid)`
  background: ${COLORS.THEME_COLOR_BLUE};
`;

export const StyledGoToServices = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 5px;
  color: ${COLORS.PINK_200};
  margin-top: 22px;
  & span {
    font-weight: bolder;
  }
`;

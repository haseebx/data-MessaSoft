import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

import { COLORS } from '@/constants/colors';

export const Heading = styled.p`
  margin: 0px;
  font-size: 50px;
  font-weight: 600;
  text-align: start;
  line-height: 3.6rem;
  padding: 20px 0px 20px 0px;
  @media (max-width: 767px) {
    padding: 10px 40px 10px -90px;
    align-item: center;
    font-size: 40px;
    line-height: 3.2rem;
  }
`;
export const Div = styled.div`
color: ${COLORS.PINK_200};
position: relative;
padding: 40px 40px 0 0px;
text-align: center;
max-width: 300px;
&::before {
  content: '';
  display: block;
  width: 55px;
  height: 1px;
  background: ${COLORS.PINK_200};
  left: 0;
  top: 85%;
  position: absolute;

  @media (max-width: 768px) {
    max-width:280px;
    width: 50px;
    left: -15px;
    text-align: center;
  }
  `;
export const Div2 = styled.div`
color: ${COLORS.PINK_200};
position: relative;
max-width: 300px;
&::before {
  content: '';
  display: block;
  background: ${COLORS.PINK_200};
  position: absolute;
  `;
export const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-weight: bold;
  background-color: #ff7d90;
  color: white;
  letter-spacing: 0.2rem;
  &:hover {
    background-color: pink;
  }
`;

export const StyledGrid = styled(Grid)`
  width: 200px;
`;
export const Container = styled(Grid)`
  background-color: ${COLORS.GREY_40};
  margin-top: 100px;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;

export const StyledGridWhite = styled(Grid)`
  color: ${COLORS.WHITE_100};
`;
export const DivDescription = styled.div`
  font-size: 22px;
  font-weight: bolder;
  color: ${COLORS.BLACK_100};
  margin-top: 15px;
`;
export const Span = styled.p`
  font-size: 17px;
  font-weight: 20px;
  color: ${COLORS.GREY_100};
  padding-right: 20px;
`;
export const DivWrapper = styled.div`
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: ${COLORS.THEME_COLOR};
  color: ${COLORS.WHITE_100};
  padding: 7px;
  width: 60px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${COLORS.THEME_COLOR};
  &: hover {
    svg {
      color: ${COLORS.GREY_LABEL};
    }
  }
`;
export const Styled = styled.p`
  font-weight: bolder;
  font-size: 13px;
  letter-spacing: 0.3rem;
  color: ${COLORS.PINK_200};
  margin-top: -5px;
  @media (max-width: 768px) {
    margin-right:40px;
`;
export const Divider = styled.div`
  border-bottom: 1px solid ${COLORS.GREY_90};
  margin-top: 13px;
  margin-bottom: 13px;
  margin-left: 0px;
  width: 100%;
`;
export const StyledGridBlack = styled(Grid)`
  height: 100%;
  color: ${COLORS.WHITE_100};
  padding: 50px 150px 126px 0px;
  margin-top: 10px;
  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 0px 60px;
  }
`;
export const Span1 = styled.p`
  font-size: 17px;
  font-weight: 20px;
  text-align: center;
  color: ${COLORS.GREY_100};
  @media (max-width: 768px) {
    text-align: center;
    padding-right: 0px;
    margin-right: 0px;
  }
`;

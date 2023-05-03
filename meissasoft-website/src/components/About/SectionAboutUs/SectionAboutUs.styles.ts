import styled from '@emotion/styled';
import { Divider, Grid } from '@mui/material';
import Button from '@mui/material/Button';

import { COLORS } from '@/constants/colors';

export const StyledGrid = styled(Grid)`
  padding: 80px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDivider = styled(Divider)`
  width: 100%;
  color: ${COLORS.PINK_200};
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  &::before {
    border-top: thin solid ${COLORS.PINK_200};
    width: 45px;
  }
  &::after {
    border-top: none;
  }
`;
export const Heading = styled.div`
  font-size: 48px;
  font-weight: bolder;
  text-align: left;
  line-height: 3.8rem;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const Image = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 520px;
  background-image: url('https://meissasoftwebimages.s3.amazonaws.com/about-us-2.PNG');
  position: relative;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    .mission {
      width: 100%;
      font-size: 10px;
      top: 0px;
      display: flex;
      padding-top: 100px;
      align-items: center;
      flex-direction: column;
      opacity: 1;
    }
    .vision {
      width: 100%;
      font-size: 10px;
      bottom: 0px;
      right: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
export const StyledButton = styled(Button)`
  font-weight: bolder;
  margin-top: 0px;
  font-size: 11px;
  letter-spacing: 0.3rem;
  width: 30%;
  left: 20px;
  margin-bottom: 10px;
  height: 50px;
  background-color: #ff7d90;
  color: white;
  &:hover {
    background-color: pink;
  }
  @media (max-width: 767px) {
    margin-top: 0px;
    text-align: center;
    width: 70%;
    left: 15%;
    right: 15%;
    margin-bottom: 20px;
  }
`;

export const H3 = styled.span`
  font-size: 23px;
  font-weight: bolder;
  text-align: left;
`;
export const Span = styled.p`
  font-size: 15px;
  font-weight: 20px;
  text-align: left;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const P3 = styled.div`
  font-size: 12px;
  font-weight: bolder;
  text-align: left;
  letter-spacing: 0.3rem;
`;
export const Div = styled.div`
  font-size: 17px;
  font-weight: 20px;
  background: ${COLORS.PINK_200};
  color: ${COLORS.WHITE_100};
  width: 40%;
  padding: 20px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  opacity: 0.9;
`;
export const Div1 = styled.div`
  font-size: 10px;
  font-weight: 20px;
  background-color: ${COLORS.THEME_COLOR_BLUE};
  color: ${COLORS.WHITE_100};
  width: 40%;
  padding: 20px;
  position: absolute;
  right: 40%;
  bottom: 0px;
  opacity: 0.8;
`;
export const P4 = styled.span`
  font-size: 12px;
  font-weight: bolder;
  text-align: left;
  color: ${COLORS.PINK_200};
  letter-spacing: 0.3rem;
`;

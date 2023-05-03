import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';
export const DivTitle = styled.div`
  color: ${COLORS.PINK_200};
  position: relative;
  text-align: center;
  left: 10%;
  max-width: 300px;
  &::before {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    background: ${COLORS.PINK_200};
    top: 55%;
    position: absolute;
  }
`;

export const StyledGrid = styled(Grid)`
  justify-content: center;
  align-item: center;
  text-align: center;
  padding: 35px 10px 0px 10px;
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
`;
export const Heading = styled.span`
  font-size: 46px;
  font-weight: bolder;
  text-align: center;
  padding: 10px 0px 10px 0px;
  line-height: 3.3rem;
`;
export const Span = styled.span`
  margin-left: 23px;
  text-align: left;

  @media (min-width: 767px) {
    justify-content: center;
  }
`;
export const StyledButton = styled(Button)`
  margin-top: 20px;
  font-weight: bolder;
  font-size: 12px;
  width: 90%;
  left: 5%;
  reight: 5%;
  letter-spacing: 0.1rem;
  height: 50px;
  background-color: #ff7d90;
  color: white;
  &:hover {
    background-color: pink;
  }
  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;
export const DivLayout = styled.div<{ hide?: boolean }>`
  background: ${COLORS.THEME_COLOR_BLUE};
  color: white;
  height: 400px;
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  transition: 0.6s all;
`;

export const DivCard = styled.div`
  display: flex;
`;
export const H1 = styled.p`
  margin: 0;
`;
export const P = styled.p`
  font-size: 15px;
  text-align: center;
`;
export const Image1 = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  background-image: url('https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-P7697GN-1024x699.jpg');
  @media (max-width: 768px) {
    justify-content: center;
    height: 50%;
    width: 100%;
  }
`;
export const Image2 = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  background-image: url('https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-P7QTJ8G-1024x683.jpg');
  @media (max-width: 768px) {
    justify-content: center;
    height: 50%;
    width: 100%;
  }
`;
export const Image3 = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  background-image: url('https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-H3PQ8A2-1024x683.jpg');
  @media (max-width: 768px) {
    justify-content: center;
    height: 50%;
    width: 100%;
  }
`;
export const DivWrapper = styled.div`
  color: ${COLORS.WHITE_100};
  padding: 290px 10px 0px 40px;
  line-height: 0.5rem;
`;
export const H2 = styled.p`
  font-size: 25px;
  font-weight: 10px; ;
`;
export const P1 = styled.p`
  font-size: 12px;
  font-weight: bolder;
  letter-spacing: 0.1rem;
`;

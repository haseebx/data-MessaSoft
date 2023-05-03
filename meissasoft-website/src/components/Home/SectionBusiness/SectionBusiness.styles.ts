import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivLayout = styled.div`
  background-color: ${COLORS.GREY_40};
  padding: 10px 0 0px 0;
`;
export const DivCenter = styled.div`
  padding: 40px 0 0 0;
  margin: 0 20% 0 20%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media (max-width: 900px) {
    margin: 0 10% 0 10%;
  }
`;

export const Heading = styled.p`
  margin: 0;
  font-size: 50px;
  font-weight: 600;
  text-align: start;
  @media (max-width: 900px) {
    text-align: center;
  }
`;
export const Heighlight = styled.span`
  color: ${COLORS.PINK_200};
`;
export const DivOverlay = styled.div`
  width: 40vh;
  padding: 20px 20px 60px 20px;
  color: ${COLORS.WHITE_100};
  background-color: #14273b;
  position: absolute;
  margin-left: 70%;
  display: flex;
  z-index: 999;
  flex-direction: column;
  margin-top: -135px;
  @media (max-width: 820px) {
    margin-top: 0px;
    margin-left: 0px;
    width: 100%;
    height: 600px;
    justify-content: center;
  }
`;
export const DivSlider = styled.div`
  max-width: 600px;
  height: 100%;
  color: ${COLORS.WHITE_100};
  padding: 20% 20px 20px 20px;
  margin-left: 18%;
  margin-top: 0%;
  @media (max-width: 1024px) {
    padding-top: 40%;
    margin-left: 10%;
  }
  @media (max-width: 820px) {
    padding-top: 60%;
  }
  @media (max-width: 620px) {
    padding-top: 80%;
    margin-left: 0%;
  }
  @media (max-width: 420px) {
    padding-top: 110%;
    margin-left: 0%;
  }
`;

export const ImagePlaceHolder = styled.div`
  height: 600px;
  filter: brightness(90%);
  position: relative;
`;
export const Divtransparent = styled.div`
  height: 600px;
  filter: brightness(90%);
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgba(43, 32, 61, 0.6));
`;
export const Div = styled.div`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  position: relative;
  padding-left: 20px;
  padding-right: 50px;
  text-align: center;
  max-width: 300px;
  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 0;
    top: 30%;
    position: absolute;
  }
  ,
  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 0%;
    top: 50%;
    position: absolute;
  }
`;

export const Title = styled.div`
  color: ${COLORS.WHITE_100};
  padding: 0px 0px 5px 0px;
  font-size: 22px;
`;
export const Description = styled.div`
  color: ${COLORS.WHITE_100};
  padding: 0px 0px 5px 0px;
`;
export const DivColoumn = styled.div`
  padding: 10px;
`;
export const SliderTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
export const SliderDescription = styled.div`
  font-size: 20px;
`;

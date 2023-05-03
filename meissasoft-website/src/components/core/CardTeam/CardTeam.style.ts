import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const Card = styled.div`
  position: relative;
  height: 400px;
  background-color: lightGrey;
  overflow: hidden;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.1);
  &:hover,
  &:focus {
    .card-back {
      transform: translate3d(0, 0, 0);
    }
  }
`;
export const DivCard = styled.div<{ hide?: boolean }>`
  height: 400px;
  position: relative;
  width: 100%;
`;

export const Images = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const DivWrapper = styled.div`
  color: ${COLORS.WHITE_100};
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: 100%;
`;

export const P = styled.div`
  font-size: 15px;
  text-align: center;
  padding: 20px;
`;
export const P2 = styled.div`
  font-size: 25px;
  font-weight: bolder;
  margin: 0px !important;
  text-align: left;
`;

export const DivLayout = styled.div<{ hide?: boolean }>`
  background: ${COLORS.THEME_COLOR_BLUE};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  transition: transform 800ms;
  transform: translate3d(100%, 0, 0);
  overflow: hidden;
  padding: 20px;
  span {
    cursor: pointer;
  }
`;

export const H2 = styled.p`
  font-size: 25px;
  font-weight: bolder;
  margin: 0px !important;
  text-align: center;
`;

export const P1 = styled.p`
  font-size: 12px;
  font-weight: bolder;
  margin: 0px !important;
  text-align: left;
`;
export const DivTitle = styled.span`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  position: relative;
  padding-left: 55px;
  padding-right: 55px;
  text-align: center;
  max-width: 300px;
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: -6%;
    top: 45%;
    position: absolute;
  }
  &::before {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 80%;
    top: 45%;
    position: absolute;
  }
`;
export const Span1 = styled.p`
  font-size: 17px;
  font-weight: 20px;
  margin-top: -30px;
  text-align: center;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

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
`;

export const StyledDivImageContainer = styled.div`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: relative;
`;

export const DivWrapper = styled.div`
  color: ${COLORS.WHITE_100};
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: 90%;
`;

export const P = styled.div`
  font-size: 15px;
  padding: 20px 20px 0px 20px;
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
  transform: translate3d(0, 100%, 0);
  overflow: hidden;
  padding: 20px;
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

export const StyledStatus = styled.p`
  font-size: 17px;
  font-weight: 200;
  text-align: left;
  padding: 0px 20px;
`;

export const StyledRatingDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  .rating {
    padding-top: 20px;
  }
`;

export const StyledLink = styled.p`
  font-size: 17px;
  font-weight: 200;
  color: ${COLORS.WHITE_100};
  text-align: left;
  padding: 0px 20px;
  cursor: pointer;
  text-decoration: underline;
`;

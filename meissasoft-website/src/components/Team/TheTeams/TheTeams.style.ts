import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const Container = styled(Grid)`
  padding: 10px 10px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DivWrapper = styled.div`
  color: ${COLORS.WHITE_100};
  padding: 0px 10px 0px 0px;
  line-height: 0.5rem;
`;
export const P = styled.p`
  font-size: 15px;
  text-align: center;
`;
export const DivLayout = styled.div<{ hide?: boolean }>`
  background: ${COLORS.THEME_COLOR_BLUE};
  color: white;
  height: 350px;
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  transition: 0.6s all;
`;
export const H2 = styled.p`
  font-size: 25px;
  font-weight: 10px;
  margin-top: -60px;
  text-align: center;
  margin-left: 50px;

  display: flex;
  justify-content: flex-start;
`;
export const P1 = styled.p`
  font-size: 12px;
  font-weight: bolder;
  letter-spacing: 0.1rem;
  margin-top: -10px;
  text-align: center;
  margin-left: 50px;

  display: flex;
  justify-content: flex-start;
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

export const StyledGrid = styled(Grid)`
  justify-content: center;
  align-item: center;
  text-align: center;
  padding: 25px 0px 20px 0px;
`;

export const Heading = styled.span`
  font-size: 46px;
  font-weight: bolder;
  text-align: center;
  line-height: 3.3rem;
  margin-top: -30px;
`;

export const Images = styled.img`
  width: 100%;
  height: 350px;
  &:hover {
  }
`;

export const DivCard = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 40px;
`;

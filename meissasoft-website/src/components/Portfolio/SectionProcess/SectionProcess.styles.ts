import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const Container = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivTitle = styled.div`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  margin-top: 60px;
  position: relative;
  padding-right: 70px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  &::after {
    content: '';
    display: block;
    width: 63px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: -40%;
    top: 50%;
    position: absolute;
  }
  &::before {
    content: '';
    display: block;
    width: 68px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 63%;
    top: 50%;
    position: absolute;
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 60px;
  text-align: center;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Heading = styled.span`
  font-weight: bolder;
  font-size: 50px;
  line-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 29px 40px 0px;
  @media (max-width: 768px) {
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
export const DivWrapper2 = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledGridWrapper = styled(Grid)`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    text-align: center;
  }
  p {
    color: ${COLORS.GREY_LABEL} !important;
    font-weight: 550 !important;
    padding: 0px 10px;
    text-align: center;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px;
  }
`;

export const DivWrapper = styled.div`
  display: flex;
  border-radius: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: ${COLORS.PINK_200};
  color: ${COLORS.WHITE_100};
  padding: 15px;
  width: 70px;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${COLORS.PINK_200};
  &: hover {
    color: ${COLORS.GREY_90};
  }
  & svg {
    font-size: 35px;
  }
`;

export const DivLayout = styled.div`
  display: flex;
  border-radius: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: ${COLORS.PINK_200};
  color: ${COLORS.PINK_200};
  padding: 15px 16px 15px 17px;
  width: 70px;
  transition: transform 0.2s;
  .rotate {
    transform: rotate(-50deg);
  }
  &: hover {
    -ms-transform: scale(0.78); /* IE 9 */
    -webkit-transform: scale(0.9); /* Safari 3-8 */
    transform: scale(0.9);
  }
  & svg {
    font-size: 35px;
  }
`;

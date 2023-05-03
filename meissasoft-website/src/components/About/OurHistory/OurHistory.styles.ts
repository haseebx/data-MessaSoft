import styled from '@emotion/styled';
import { Grid, Divider } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const DivTitle = styled.div`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  position: relative;
  padding-left: 0px;
  padding-right: 80px;
  text-align: center;
  max-width: 300px;
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: -40%;
    top: 50%;
    position: absolute;
  }
  &::before {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 60%;
    top: 50%;
    position: absolute;
  }
  @media (max-width: 768px) {
    color: ${COLORS.PINK_200};
    font-weight: 600;
    position: relative;
    padding-left: 145px;
    padding-right: 80px;
    text-align: center;
    max-width: 390px;
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 1px;
      background: ${COLORS.PINK_200};
      left: 25%;
      top: 50%;
      position: absolute;
    }
    &::before {
      content: '';
      display: block;
      width: 60px;
      height: 1px;
      background: ${COLORS.PINK_200};
      left: 76%;
      top: 50%;
      position: absolute;
    }
  }
`;

export const StyledDivider = styled(Divider)`
  color: ${COLORS.PINK_200};
  &::before {
    border-top: none;
    width: 15px;
  }
  &::after {
    border-top: thin solid ${COLORS.PINK_200};
  }
`;

export const StyledGrid = styled(Grid)`
  padding: 20px 0px 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Heading = styled.span`
  font-weight: bolder;
  font-size: 50px;
  line-height: 3.5rem;
  text-align: center;
  padding: 20px 0px 40px 0px;
`;
export const DivDescription = styled.div`
  font-size: 22px;
  font-weight: bolder;
  text-align: left;
  color: ${COLORS.BLACK_100};
`;
export const Span = styled.p`
  font-size: 17px;
  font-weight: 20px;
  text-align: left;
  margin-top: 5px;
  padding: 0px 10px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const DivWrapper = styled.div`
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: ${COLORS.PINK_200};
  color: ${COLORS.WHITE_100};
  padding: 8px;
  width: 50px;
  background-color: ${COLORS.PINK_200};
  transition: transform 0.2s;
  display: flex;
  justify-content: center;
  &: hover {
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: scale(1.1);
  }
  svg {
    font-size: 30px;
    &: hover {
      color: ${COLORS.GREY_100};
    }
  }
`;

export const SpanYear = styled.span`
  font-size: 17px;
  margin-top: 10px;
  color: ${COLORS.PINK_200};
`;

export const YearLine = styled.div`
  border-bottom: 1px solid ${COLORS.PINK_200};
  margin-top: 13px;
`;
export const YearLine1 = styled.div`
  border-bottom: 1px solid ${COLORS.PINK_200};
  margin-top: 13px;
  margin-left: 10px;
`;

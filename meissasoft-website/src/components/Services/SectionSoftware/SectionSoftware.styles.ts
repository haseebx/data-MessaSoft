import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

import { COLORS } from '@/constants/colors';
export const StyledLabel = styled.div`
  color: ${COLORS.PINK_200};
  font-weight: 600;
  position: relative;
  padding-left: 65px;
  padding-right: 35px;
  text-align: left;
  max-width: 300px;
  &::before {
    content: '';
    display: block;
    width: 50px;
    height: 1px;
    background: ${COLORS.PINK_200};
    left: 3%;
    top: 40%;
    position: absolute;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;

    &::before {
      left: 20%;
      width: 40px;
    }
  }
`;

export const StyledGrid = styled(Grid)`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Heading = styled.span`
  font-size: 52px;
  font-weight: bolder;
  text-align: center;
  justify-content: center;
  align-item: center;
  line-height: 4rem;
`;
export const Span = styled.p`
  font-size: 18px;
  font-weight: 20px;
  justify-content: center;
  align-item: center;
`;

export const StyledButton = styled(Button)`
  font-weight: bolder;
  font-size: 12px;
  letter-spacing: 0.3rem;
  width: 33%;
  height: 50px;
  background-color: #ff7d90;
  color: white;
  &:hover {
    background-color: pink;
  }
  @media (max-width: 767px) {
    margin: 3px 0px 0px 30px;
    width: 70%;
  }
`;

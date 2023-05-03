import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

import { COLORS } from '@/constants/colors';

export const Container = styled(Grid)`
  background-color: ${COLORS.GREY_40};
  padding: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const StyledDivider = styled(Divider)`
  width: 100%;
  color: ${COLORS.PINK_200};
  &::before {
    border-top: thin solid ${COLORS.PINK_200};
  }
  &::after {
    border-top: thin solid ${COLORS.PINK_200};
  }
`;

export const StyledGrid1 = styled(Grid)`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Heading = styled.span`
  font-weight: bolder;
  font-size: 40px;
  text-align: center;
  margin-top: -90px;
  padding: 10px;

}
  @media (max-width: 768px) {
    font-size: 42px;
    text-align: center;
    
  }
`;

export const StyledLabel = styled.h3`
  color: ${COLORS.BLACK_100};
  font-size: 25px;
  font-weight: 10px;
`;

export const Span = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-top: -7px;
  letter-spacing: 0.2rem;
`;
export const Span2 = styled.p`
  font-size: 15px;
  margin-top: -10px;
  color: ${COLORS.GREY_100};
`;
export const Span1 = styled.p`
  font-size: 18px;
  font-weight: 80px;
  margin-top: -3px;
  color: ${COLORS.GREY_100};
`;

export const StyledImageContainer = styled.div`
  min-height: 280px;
  position: relative;
  width: 100%;
  @media (max-width: 767px) {
    width: 100%;
    min-height: 120px;
  }
`;
export const StyledGrid = styled(Grid)`
  align-item: center;
  // padding-left: 20px;
  // padding-right: 20px;
  margin-top: -35px;
  @media (max-width: 767px) {
  }
`;
export const Image2 = styled(Grid)`
  min-height: 280px;
  background-image: url('https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-EACCXCY-1024x683.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  @media (max-width: 767px) {
    width: 30%;
    min-height: 120px;
  }
`;
export const Image3 = styled(Grid)`
  min-height: 280px;
  background-image: url('https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-PCKPS7Y-1024x683.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  @media (max-width: 767px) {
    width: 30%;
    min-height: 120px;
  }
`;
export const Image4 = styled(Grid)`
  min-height: 280px;
  background-image: url('https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-FYAD8B4-1024x683.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  @media (max-width: 767px) {
    width: 30%;
    min-height: 120px;
  }
`;
export const Image5 = styled(Grid)`
  min-height: 280px;
  background-image: url('https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-HMGNN9E-1024x641.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  @media (max-width: 767px) {
    width: 30%;
    min-height: 120px;
  }
`;
export const Image6 = styled(Grid)`
  min-height: 280px;
  background-image: url('https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-JDHACMJ-1024x683.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  @media (max-width: 767px) {
    width: 30%;
    min-height: 120px;
  }
`;

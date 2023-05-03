import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const StyleDivCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledDescription = styled.p`
  color: ${COLORS.GREY_LABEL};
  font-size: 15px;
  padding: 0px 10px;
`;

export const StyledName = styled.p`
  color: ${COLORS.THEME_COLOR};
  font-size: 16px;
  font-weight: bolder;
`;

export const StyledPosition = styled.div`
  color: ${COLORS.THEME_COLOR};
  font-size: 15px;
  font-weight: bolder;
`;

export const StyledImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
`;

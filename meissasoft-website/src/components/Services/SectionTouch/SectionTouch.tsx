import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { DivTitle, StyledGrid, Container, Heading, Span, StyledButton } from './SectionTouch.styles';

const SectionTouch = () => {
  return (
    <Container container>
      <StyledGrid item md={12} sm={12} lg={12}>
        <DivTitle>GET IN TOUCH</DivTitle>
      </StyledGrid>
      <StyledGrid item md={12} sm={12} lg={12}>
        <Heading>
          Have Digital Product Projects <br /> For Your Business?
        </Heading>
      </StyledGrid>
      <StyledGrid item md={12} sm={12}>
        <Span>CONNECT WITH OUR EXPERTS TO PROMPTLY GET AN INTELLIGENT EXTENSION OF YOUR IN-HOUSE TEAM.</Span>
      </StyledGrid>
      <StyledGrid item lg={12} md={12} sm={12}>
        <StyledButton>
          <ArrowRightAltIcon style={{ color: 'white' }} />
          BOOK CONSULTATION
        </StyledButton>
      </StyledGrid>
    </Container>
  );
};
export default SectionTouch;

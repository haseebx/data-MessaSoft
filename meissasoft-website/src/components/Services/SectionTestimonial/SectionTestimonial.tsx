import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import Slider from '@/components/core/TestimonialSlider';
import { getAppDataSelector } from '@/store/app';

import { DivTitle, StyledGrid, Container, Heading, Span3 } from './SectionTestimonial.styles';

const SectionTestimonial = () => {
  const { clients } = useSelector(getAppDataSelector);

  return (
    <Container container>
      <StyledGrid item xs={12}>
        <DivTitle>TESTIMONIALS</DivTitle>
      </StyledGrid>
      <StyledGrid item xs={12}>
        <Heading>What Our Happy Clients Say</Heading>
      </StyledGrid>
      <StyledGrid item xs={12}>
        <Span3>Learn why they have chosen us and how we have helped them to change people’s lives.</Span3>
      </StyledGrid>
      <Grid container display="flex" justifyContent="center" marginTop="40px">
        <Grid item xs={10} display="inline-block">
          <Slider testimonials={clients} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default SectionTestimonial;

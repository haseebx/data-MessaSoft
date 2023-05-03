import Image from 'next/image';

import Grid from '@mui/material/Grid';

import { StyledGrid, DivLayout, StyledDivider } from './Testimonials.styles';

const Testimonials = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <DivLayout>
              <Grid item xs={4} width="100%">
                <StyledDivider>TESTIMONIALS</StyledDivider>
              </Grid>
              <Grid item xs={12} padding="0px 10px">
                <p>
                  Our clients praise us for our great results, personable service, expert knowledge and on-time
                  delivery.
                </p>
              </Grid>
            </DivLayout>
          </Grid>
          <Grid item md={6} xs={12} position="relative" height={450}>
            <Image
              src={'https://meissasoftwebimages.s3.amazonaws.com/testimonials.jpg'}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/testimonials.jpg&w=16&q=1`}
              loading="lazy"
              objectFit="cover"
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default Testimonials;

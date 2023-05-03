import Image from 'next/image';

import Grid from '@mui/material/Grid';

import { StyledGrid, DivLayout, StyledDivider } from './SectionServices.styles';

const SectionServices = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <DivLayout>
              <StyledDivider>Services</StyledDivider>
              <Grid item md={12} sm={12} xs={12}>
                <p>
                  Our software development company delivers corporate and consumer applications based on our profound
                  understanding of technologies and the markets they operate in. With our professional mindset, we look
                  beyond technology to offer viable solutions for your particular business context.
                </p>
              </Grid>
            </DivLayout>
          </Grid>
          <Grid item md={6} xs={12} position="relative" height={450}>
            <Image
              src={'https://meissasoftwebimages.s3.amazonaws.com/services-banner.jpg'}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/services-banner.jpg&w=16&q=1`}
              loading="lazy"
              objectFit="cover"
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default SectionServices;

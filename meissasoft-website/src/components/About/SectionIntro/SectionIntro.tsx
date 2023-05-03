import Image from 'next/image';

import Grid from '@mui/material/Grid';

import { StyledGrid, DivLayout, StyledDivider } from './SectionIntro.styles';

const SectionIntro = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} xs={12}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <DivLayout>
              <Grid item xs={12}>
                <StyledDivider>ABOUT US </StyledDivider>
              </Grid>
              <Grid item xs={10}>
                <p className="animate-left">
                  Your outsourcing partner for your contact centre, accounting and IT helpdesk needs. We leverage
                  technology and human interaction to build an ideal combination to take care of your outsourcing needs.
                </p>
              </Grid>
            </DivLayout>
          </Grid>
          <Grid item md={6} xs={12} position="relative" height={450}>
            <Image
              src={'https://meissasoftwebimages.s3.amazonaws.com/about-us-1.jpg'}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/about-us-1.jpg&w=16&q=1`}
              loading="lazy"
              style={{ filter: 'brightness(90%)' }}
              objectFit="cover"
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default SectionIntro;

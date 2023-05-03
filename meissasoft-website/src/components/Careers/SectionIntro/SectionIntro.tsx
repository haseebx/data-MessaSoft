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
                <StyledDivider>Careers </StyledDivider>
              </Grid>
              <Grid item xs={12}>
                <p>Ready to join our team and create great products?</p>
                <p>
                  Why Join MeissaSoft? Techies, innovators, developers, and free-thinkers… you’ve come to the right
                  place. We give you opportunities to excel and achieve the global recognition that you deserve!
                </p>
              </Grid>
            </DivLayout>
          </Grid>
          <Grid item md={6} xs={12} position="relative" height={450}>
            <Image
              src={'https://meissasoftwebimages.s3.amazonaws.com/careers.jpeg'}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/careers.jpeg&w=16&q=1`}
              loading="lazy"
              objectFit="cover"
              style={{ filter: 'brightness(90%)' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default SectionIntro;

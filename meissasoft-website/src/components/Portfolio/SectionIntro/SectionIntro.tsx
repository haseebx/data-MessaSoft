import Image from 'next/image';

import Grid from '@mui/material/Grid';

import { StyledGrid, DivLayout, StyledDivider } from './SectionIntro.styles';

const SectionIntro = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <DivLayout>
              <StyledDivider>Portfolios</StyledDivider>
              <Grid item md={12} sm={12} xs={12}>
                <p>
                  Solutions that exceed our customers expectations.Delivered projects that prove our quality. Hallmark
                  Success Stories of Our 100-Project Portfolio
                </p>
              </Grid>
            </DivLayout>
          </Grid>
          <Grid item md={6} xs={12} position="relative" height={450}>
            <Image
              src={'https://meissasoftwebimages.s3.amazonaws.com/case-study.jpg'}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/case-study.jpg&w=16&q=1`}
              loading="lazy"
              objectFit="cover"
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default SectionIntro;

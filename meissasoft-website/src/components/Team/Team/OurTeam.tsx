import Image from 'next/image';

import Grid from '@mui/material/Grid';

import { StyledGrid, DivLayout, StyledDivider } from './OurTeam.styles';

const OurTeam = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} xs={12}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <DivLayout>
              <Grid item xs={12}>
                <StyledDivider>TEAM </StyledDivider>
              </Grid>
              <Grid item xs={12}>
                <p>
                  We established Meissasoft in 2020 and after just a few years, we are now a team of almost 20 plus
                  employees, who have been divided into specialised teams. Each of them is responsible for a certain
                  area of activity in projects. Despite the organisational division, we still work together, consulting
                  on many issues, we support and share our experiences with colleagues. Together we feel even stronger.
                </p>
              </Grid>
            </DivLayout>
          </Grid>
          <Grid item md={6} xs={12} position="relative" height={450}>
            <Image
              src={'https://meissasoftwebimages.s3.amazonaws.com/our-team.jpg'}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/our-team.jpg&w=16&q=1`}
              loading="lazy"
              objectFit="cover"
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default OurTeam;

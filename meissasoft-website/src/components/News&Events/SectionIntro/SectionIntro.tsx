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
              <Grid item xs={7} width="100%">
                <StyledDivider> News & Events </StyledDivider>
              </Grid>
              <Grid item xs={12}>
                <p>
                  Social events are closest to our heart. The emotional attachment in a social event makes it
                  challenging as well as exhilarating. We pay attention not only to things which are said but also to
                  the non-verbal cues given by client,this helps us to give our best to the client.
                </p>
              </Grid>
            </DivLayout>
          </Grid>
          <Grid item md={6} xs={12} height={450} position="relative">
            <Image
              src={'https://meissasoftwebimages.s3.amazonaws.com/news-and-events.webp'}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/news-and-events.webp&w=16&q=1`}
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

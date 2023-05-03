import Image from 'next/image';

import Grid from '@mui/material/Grid';

import { COLORS } from '@/constants/colors';

import {
  DivLayout,
  Div,
  DivCenter,
  DivColoumn,
  H1,
  H4,
  StyledButton,
  StylyedLabel,
  StyledGridImage,
  DivBottom,
} from './SectionChoose.style';
import { Slides } from './SlidesBottom';

const SectionChoose = () => {
  return (
    <Div>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} wrap="wrap-reverse">
        <StyledGridImage item xs={12} sm={12} md={6}>
          <Image
            src={'https://meissasoftwebimages.s3.amazonaws.com/choose-us.jpg'}
            layout="fill"
            placeholder="blur"
            blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/choose-us.jpg&w=16&q=1`}
            loading="lazy"
            objectFit="cover"
          />
        </StyledGridImage>
        <DivBottom>
          <Slides />
        </DivBottom>

        <Grid
          style={{ backgroundColor: COLORS.THEME_COLOR, padding: '10px 30px 30px 50px' }}
          item
          xs={12}
          sm={12}
          md={6}
        >
          <DivLayout>
            <StylyedLabel className="animate-left">WHY CHOOSE US ?</StylyedLabel>
          </DivLayout>

          <DivLayout>
            <H1>We Create Impactful Digital Solutions That Drive Meaningful</H1>
          </DivLayout>
          <Grid container spacing={{ xs: 1, md: 1, lg: 1 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Grid item xs={12}>
              <DivColoumn>
                <H4>
                  Why us? Well, because we know how to interpret and transform your requirements into a full-fledged
                  application.
                </H4>
              </DivColoumn>
            </Grid>
          </Grid>
          <DivCenter>
            <Grid style={{ paddingTop: '25px' }} item xs={6} sm={3} md={3}>
              <StyledButton>Learn More</StyledButton>
            </Grid>
          </DivCenter>
        </Grid>
      </Grid>
    </Div>
  );
};
export default SectionChoose;

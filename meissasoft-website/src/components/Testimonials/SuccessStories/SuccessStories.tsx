import Image from 'next/image';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Grid from '@mui/material/Grid';

import { StyledGrid, StyledLabel, Heading, Span, StyledButton } from './SuccessStories.style';
const SuccessStories = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container>
          <Grid item md={6} xs={12} position="relative">
            <Image
              src={'https://meissasoftwebimages.s3.amazonaws.com/our-success.jpg'}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/our-success.jpg&w=16&q=1`}
              loading="lazy"
              objectFit="cover"
            />
          </Grid>
          <Grid item md={6} xs={12} style={{ padding: '80px 0px 0px 0px' }}>
            <Grid item md={6} sm={8} xs={12} lg={5}>
              <StyledLabel>SUCCESS STORIES</StyledLabel>
            </Grid>
            <Heading>
              Successful
              <br /> Achievement Of Company’s Goals
            </Heading>
            <Span>
              Everyone at Meissasoft gives maximum leverage to clients so that we can create a strong business
              relationship – together. Our development processes are formed to ensure that our projects are finished in
              time, within the given budget, and beyond our client’s expectations.
            </Span>
            <StyledButton>
              <ArrowRightAltIcon style={{ color: 'white' }} />
              LEARN MORE
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default SuccessStories;

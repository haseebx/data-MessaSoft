import Image from 'next/image';

import React from 'react';

import Grid from '@mui/material/Grid';

import { Container, ImageContainer, DivLayout, DivTitle, DivDescription } from './SectionSlide.styles';

const SectionSlide = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={'https://meissasoftwebimages.s3.amazonaws.com/project-completed.PNG'}
          layout="fill"
          placeholder="blur"
          blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/project-completed.PNG&w=16&q=1`}
          loading="lazy"
          objectFit="cover"
        />
        <DivLayout container item xs={8}>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            display="flex"
            flexDirection="column"
            marginBottom="20px"
            alignItems="center"
          >
            <DivTitle>50+</DivTitle>
            <DivDescription>Project Completed</DivDescription>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            display="flex"
            flexDirection="column"
            marginBottom="20px"
            alignItems="center"
          >
            <DivTitle>20+</DivTitle>
            <DivDescription>Clients Served</DivDescription>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            display="flex"
            flexDirection="column"
            marginBottom="20px"
            alignItems="center"
          >
            <DivTitle>80%</DivTitle>
            <DivDescription>Loyal Clients</DivDescription>
          </Grid>
        </DivLayout>
      </ImageContainer>
    </Container>
  );
};
export default SectionSlide;

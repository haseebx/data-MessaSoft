import Image from 'next/image';

import React from 'react';

import Grid from '@mui/material/Grid';

import { Container, ImageContainer, DivLayout, DivTitle, DivDescription } from './SectionSlider.styles';

const SectionSlider = () => {
  return (
    <Container container>
      <Grid item md={8} sm={12} xs={12}>
        <ImageContainer>
          <Image
            src={'https://meissasoftwebimages.s3.amazonaws.com/project-completed.PNG'}
            layout="fill"
            placeholder="blur"
            blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/project-completed.PNG&w=16&q=1`}
            loading="lazy"
            objectFit="cover"
          />
          <DivLayout container item xs={8} spacing={4}>
            <Grid item xs={12} md={4} display="flex" flexDirection="column" marginBottom="20px">
              <DivTitle>400+</DivTitle>
              <DivDescription>Project Completed</DivDescription>
            </Grid>
            <Grid item xs={12} md={4} display="flex" flexDirection="column" marginBottom="20px">
              <DivTitle>100+</DivTitle>
              <DivDescription>Clients Served</DivDescription>
            </Grid>
            <Grid item xs={12} md={4} display="flex" flexDirection="column" marginBottom="20px">
              <DivTitle> 80% </DivTitle>
              <DivDescription>Loyal Clients</DivDescription>
            </Grid>
          </DivLayout>
        </ImageContainer>
      </Grid>
    </Container>
  );
};
export default SectionSlider;

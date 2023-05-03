import Image from 'next/image';

import React from 'react';

import Carousel from 'react-multi-carousel';

import { IClient } from '@/store/app/types';

import { StyleDivCard, StyledDescription, StyledName, StyledPosition, StyledImage } from './TestimonialSlider.styles';

interface ITestimonial {
  testimonials: IClient[];
}

interface ISlider {
  id: number;
  name: string;
  description: string;
  designation: string;
  image: string;
}

export default function Slider({ testimonials }: ITestimonial) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 2,
      paritialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      paritialVisibilityGutter: 0,
    },
  };

  return (
    <Carousel
      partialVisbile
      deviceType="mobile"
      responsive={responsive}
      removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      showDots
      dotListClass="dots"
      rewindWithAnimation
      rewind
      autoPlay
    >
      {testimonials.map(({ id, description, name, designation }: ISlider) => {
        return (
          <StyleDivCard key={id}>
            <StyledImage>
              <Image
                src={'https://meissasoftwebimages.s3.amazonaws.com/avatar.PNG'}
                layout="fill"
                placeholder="blur"
                blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/avatar.PNG&w=16&q=1`}
                loading="lazy"
                style={{ borderRadius: '50%' }}
                objectFit="cover"
              />
            </StyledImage>
            <StyledDescription>{description}</StyledDescription>
            <StyledName>{name}</StyledName>
            <StyledPosition>{designation}</StyledPosition>
            <p></p>
            <p></p>
          </StyleDivCard>
        );
      })}
    </Carousel>
  );
}

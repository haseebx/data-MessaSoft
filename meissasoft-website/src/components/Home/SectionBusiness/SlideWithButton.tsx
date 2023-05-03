import React from 'react';

import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel';

import { DivSlider, SliderDescription, SliderTitle } from './SectionBusiness.styles';
export function Slider() {
  const items = [
    {
      name: 'WEB DEVELOPMENT',
      description: 'We showcase your idea into a professional website',
    },
    {
      name: 'MOBILE APP DEVELOPMENT',
      description: 'We can shelf our complex service in a easy-to-use business app',
    },
    {
      name: 'DESKTOP APP DEVELOPMENT',
      description: 'We have experience in creating boxed and licensed solutions for various platforms in our portfolio',
    },
    {
      name: 'Api development',
      description:
        'WE provides API development services for the existing software solutions to ensure better connectivit',
    },
  ];

  return (
    <DivSlider>
      <Carousel
        height={200}
        animation={'slide'}
        duration={2000}
        swipe={true}
        stopAutoPlayOnHover={true}
        navButtonsAlwaysInvisible={true}
        indicators={false}
      >
        {items.map((item, i) => (
          <Item key={i} name={item.name} description={item.description} />
        ))}
      </Carousel>
    </DivSlider>
  );
}
type Props = {
  name: string;
  description: string;
};
function Item({ name, description }: Props) {
  return (
    <div>
      <SliderTitle>{name}</SliderTitle>
      <SliderDescription>{description}</SliderDescription>
      <Button sx={{ borderColor: 'white', color: 'white' }} variant="outlined">
        Learn More
      </Button>
    </div>
  );
}

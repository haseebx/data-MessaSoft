import React from 'react';

import Carousel from 'react-multi-carousel';

import { SliderName } from './SectionChoose.styles';
export function Slides() {
  const items = [
    {
      name: 'PlanWell',
    },
    {
      name: 'Infinite Compute',
    },
    {
      name: 'Galaxi',
    },
    {
      name: ' Prime Lab',
    },
    {
      name: 'Octane',
    },
    {
      name: 'Fog Bugz',
    },
    {
      name: 'Soccoco',
    },
  ];
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
      rewindWithAnimation
      rewind
      autoPlay
      customTransition="transform 300ms ease-in"
    >
      {items.map((item, i) => (
        <Item key={i} name={item.name} />
      ))}
    </Carousel>
  );
}
type Props = {
  name: string;
};
function Item({ name }: Props) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <SliderName>{name}</SliderName>
    </div>
  );
}

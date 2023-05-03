import Image from 'next/image';

import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

import ListData from './ListData';
import {
  DivLayout,
  DivCenter,
  Div,
  Heading,
  Heighlight,
  ImagePlaceHolder,
  DivOverlay,
  Divtransparent,
} from './SectionBusiness.styles';
import { Slider } from './SlideWithButton';

const SecitonBusiness = () => {
  const Data = [
    {
      title: 'Mobile Development',
      description:
        'Meissasoft enjoins a hallmark of projects in mobile application development and contributed to the industry',
    },
    {
      title: 'Web Development',
      description: 'We create a smooth user experience for every web design and development project we take.',
    },
    {
      title: 'Dev Ops',
      description: 'Meissasoft would like to offer its services to move your workload to AWS.',
    },
    {
      title: 'Software Development',
      description:
        'For various startups and established businesses alike, our exceptional software development company',
    },
  ];
  return (
    <DivLayout>
      <DivCenter>
        <Div>MEISSASOFT CODE</Div>
        <Heading>
          Build Your<Heighlight> Custom Software</Heighlight> Or <br /> Digitalize Your Business
        </Heading>
        <p>
          We offer the platform from where the projects take shape through stages of planning, testing and execution.{' '}
          <br /> In this aspect we follow an agile methodology and run the project through a loop of feedback.
        </p>
      </DivCenter>

      <ImagePlaceHolder>
        <Image
          src={'https://meissasoftwebimages.s3.amazonaws.com/home-banner.jpg'}
          layout="fill"
          placeholder="blur"
          blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/home-banner.jpg&w=16&q=1`}
          loading="lazy"
          objectFit="cover"
        />
        <Divtransparent>
          <DivOverlay>
            {Data.map((a) => {
              return (
                <Grid item xs={4}>
                  <ListData title={a.title} description={a.description} />
                  <Divider style={{ borderColor: 'white' }} />
                </Grid>
              );
            })}
          </DivOverlay>
          <Slider />
        </Divtransparent>
      </ImagePlaceHolder>
    </DivLayout>
  );
};
export default SecitonBusiness;

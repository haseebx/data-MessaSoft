import Image from 'next/image';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Grid from '@mui/material/Grid';

import {
  StyledGrid,
  StyledDivider,
  Heading,
  // Image,
  StyledButton,
  H3,
  Span,
  P3,
  P4,
  Div,
  Div1,
} from './SectionAboutUs.styles';

const SectionAboutUs = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Grid item xs={12}>
              <StyledDivider textAlign="right">ABOUT US </StyledDivider>
            </Grid>
            <Heading className="animate-right">We Are Determined To Be The Luxury Software Development Service</Heading>
            <Span>
              We strive to understand the challenges that the industry is facing today and use our strong business
              acumen to find exclusive and unprecedented solutions for them. Our mission is to bring good quality
              embedded in the innovative techniques that are designed by our tech-experts
            </Span>
            <Span>
              Our experts and consultants handpick those solutions that ensure long-term competitive edge around a
              shrewd policy agenda. Our core competency is the design and development of web-based solutions and
              applications. We have a proven track record to meet inhuman deadlines and our motto is to deliver quality
              work at a lightning pace without exceeding the budget.
            </Span>
            <StyledButton>
              <ArrowRightAltIcon style={{ color: 'white' }} />
              LEARN MORE
            </StyledButton>
          </Grid>
          <Grid item md={6} xs={12} position="relative" height={450}>
            <Image
              src={'https://meissasoftwebimages.s3.amazonaws.com/about-us-2.PNG'}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/about-us-2.PNG&w=16&q=1`}
              loading="lazy"
              objectFit="cover"
            />
            <Div className="mission">
              <H3>Our Mission</H3>
              <Span>
                To maintain a balance between innovation & practicalities with a firm commitment to provide a
                diversified range of software services based on client focus and professionalism.
              </Span>
              <P3>READ MORE</P3>
            </Div>
            <Div1 className="vision">
              <H3>Our Vision</H3>
              <Span>
                To reduce the remarkably high rate of software project failures worldwide, by transforming the way
                companies manage them.
              </Span>
              <P4>READ MORE</P4>
            </Div1>
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default SectionAboutUs;

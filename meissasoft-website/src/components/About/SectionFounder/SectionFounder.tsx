import Image from 'next/image';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Grid from '@mui/material/Grid';

import { StyledGrid, StyledLabel, Heading, Span, StyledButton } from './SectionFounder.style';
const SectionFounder = () => {
  return (
    <StyledGrid container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container>
          <Grid item md={6} xs={12} position="relative" height={565}>
            <Image
              src={'https://meissasoftwebimages.s3.amazonaws.com/abdulrehmanmirza.jpg'}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/abdulrehmanmirza.jpg&w=16&q=1`}
              loading="lazy"
              objectFit="cover"
            />
          </Grid>
          <Grid item md={6} xs={12} style={{ padding: '80px 0px 0px 0px' }}>
            <Grid item md={6} sm={8} xs={12} lg={5}>
              <StyledLabel>FROM FOUNDER</StyledLabel>
            </Grid>
            <Heading>We Believe That Perfection Is Overrated When The Business Goals</Heading>
            <Span>
              Meissasoft is not only a name or a company. It is a passion, a desire to grow, serve and excel. Its
              success story is carved by untiring hard work, dedication and adherence of its team members to its cause.
              For our clients Meissasoft is a name which stands for its commitment, customer care, integrity, product
              knowledge, trouble free services and competitive prices.
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

export default SectionFounder;

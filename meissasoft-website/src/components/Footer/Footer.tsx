import { useState } from 'react';

import Grid from '@mui/material/Grid';

import { isValidateEmail, navigateToLink } from '@/utils/helper';

import {
  Div,
  DivColoumn,
  H4,
  StyledP,
  StyledButton,
  StyledInput,
  StyledErrorP,
  StyledDivider,
  StyledGridImage,
  StyledImage,
  DivCenter,
} from './Footer.style';

const Footer = () => {
  const [error, setError] = useState<any>();
  const [email] = useState('');
  const handleSub = () => {
    if (email.length < 1) {
      setError(false);
    } else {
      setError(!isValidateEmail(email));
    }
  };
  return (
    <Div container>
      <DivCenter item xs={10} md={8}>
        <Grid container spacing={{ xs: 2, md: 1 }} display="flex" alignItems="center">
          <Grid item xs={12} md={2}>
            <h1 style={{ marginTop: 0 }}>Meissasoft</h1>
          </Grid>
          <Grid item xs={12} md={5}>
            <h4>
              At Meissasoft, we provide the exceptional service and communication we'd want to experience ourselves!
            </h4>
          </Grid>
          <Grid item xs={12} md={3}>
            <StyledInput name="email" value={email} />
            {error && <StyledErrorP>Please enter a valid email</StyledErrorP>}
          </Grid>
          <Grid item xs={12} md={2}>
            <StyledButton onClick={handleSub}>Subscribe</StyledButton>
          </Grid>
        </Grid>
        <StyledDivider />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid item xs={12} md={3}>
                <DivColoumn>
                  <h3>Company</h3>
                  <H4>About</H4>
                  <H4>Invester</H4>
                  <H4>Clients</H4>
                  <H4>Legal</H4>
                </DivColoumn>
              </Grid>

              <Grid item xs={12} md={3}>
                <DivColoumn>
                  <h3>Useful Links</h3>
                  <H4>News</H4>
                  <H4>Our Process</H4>
                  <H4>Team</H4>
                  <H4>Knowledge Base</H4>
                </DivColoumn>
              </Grid>

              <Grid item xs={12} md={3}>
                <DivColoumn>
                  <h3>Services</h3>
                  <H4>Mobile Apps</H4>
                  <H4>Web Apps</H4>
                  <H4>Custom Applications</H4>
                  <H4>Digital Marketing</H4>
                </DivColoumn>
              </Grid>

              <Grid item xs={12} md={3}>
                <DivColoumn>
                  <h3>Follow Us</h3>
                  <H4 onClick={() => navigateToLink('https://www.linkedin.com/company/meissasoft/')}>LinkedIn</H4>
                  <H4 onClick={() => navigateToLink('https://github.com/meissasoft')}>GitHub</H4>
                  <H4
                    onClick={() =>
                      navigateToLink(
                        'https://www.facebook.com/pages/category/Product-service/Meissasoft-117991572935084/'
                      )
                    }
                  >
                    Facebook
                  </H4>
                </DivColoumn>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container rowGap={2} paddingTop="20px">
              <StyledGridImage item xs={4}>
                <StyledImage
                  src={'https://meissasoftwebimages.s3.amazonaws.com/app-develop.png'}
                  alt="App Develop"
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/app-develop.png&w=16&q=1`}
                  loading="lazy"
                  height={80}
                  width={100}
                  objectFit="cover"
                />
              </StyledGridImage>
              <StyledGridImage item xs={4}>
                <StyledImage
                  src={'https://meissasoftwebimages.s3.amazonaws.com/backend-develop.png'}
                  alt="BackendDevelop"
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/backend-develop.png&w=16&q=1`}
                  loading="lazy"
                  height={80}
                  width={100}
                  objectFit="cover"
                />
              </StyledGridImage>
              <StyledGridImage item xs={4}>
                <StyledImage
                  src={'https://meissasoftwebimages.s3.amazonaws.com/devops.jpg'}
                  alt="DevOps"
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/devops.jpg&w=16&q=1`}
                  loading="lazy"
                  height={80}
                  width={100}
                  objectFit="cover"
                />
              </StyledGridImage>
              <StyledGridImage item xs={4}>
                <StyledImage
                  src={'https://meissasoftwebimages.s3.amazonaws.com/web-develop.png'}
                  alt="WebDevelop"
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/web-develop.png&w=16&q=1`}
                  loading="lazy"
                  height={80}
                  width={100}
                  objectFit="cover"
                />
              </StyledGridImage>
              <StyledGridImage item xs={4}>
                <StyledImage
                  src={'https://meissasoftwebimages.s3.amazonaws.com/footer-back-1.png'}
                  alt="Dev"
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/footer-back-1.png&w=16&q=1`}
                  loading="lazy"
                  height={80}
                  width={100}
                  objectFit="cover"
                />
              </StyledGridImage>
              <StyledGridImage item xs={4}>
                <StyledImage
                  src={'https://meissasoftwebimages.s3.amazonaws.com/footer-back.png'}
                  alt="Develop"
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/footer-back.png&w=16&q=1`}
                  loading="lazy"
                  height={80}
                  width={100}
                  objectFit="cover"
                />
              </StyledGridImage>
            </Grid>
          </Grid>
        </Grid>
        <StyledDivider />
        <StyledP>Copyright © {new Date().getFullYear()} All Rights Reserved</StyledP>
        <StyledP>www.meissasoft.com</StyledP>
      </DivCenter>
    </Div>
  );
};
export default Footer;

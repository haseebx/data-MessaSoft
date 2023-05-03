import Image from 'next/image';
import Link from 'next/link';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Grid from '@mui/material/Grid';

import {
  StyledGrid,
  Heading,
  StyledDivider,
  StyledImageDescription,
  StyledMobileAppGrid,
  StyledMobileAppBack,
  StyledMobileAppContainer,
  StyledMobileAppFront,
  StyledWebAppGrid,
  StyledWebAppContainer,
  StyledWebAppFront,
  StyledWebAppBack,
  StyledBackendDevelopGrid,
  StyledBackendDevelopContainer,
  StyledBackendDevelopFront,
  StyledBackendDevelopBack,
  StyledDevopsGrid,
  StyledDevopsContainer,
  StyledDevopsFront,
  StyledDevopsBack,
  StyledGoToServices,
} from './SectionServices.styles';

const SectionServices = () => {
  return (
    <>
      <StyledGrid container>
        <Grid item md={8} sm={12} xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Grid item xs={2}>
                <StyledDivider textAlign="right">SERVICES</StyledDivider>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item md={10} xs={9}>
                <Heading>Featured Services</Heading>
              </Grid>
              <Grid item md={2} xs={3}>
                <Link href="/services">
                  <StyledGoToServices>
                    <ArrowRightAltIcon />
                    <span>See All Services</span>
                  </StyledGoToServices>
                </Link>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={4}>
              <Grid item md={5} xs={12}>
                <StyledMobileAppGrid container>
                  <StyledMobileAppContainer className="app-container">
                    <StyledMobileAppFront>
                      <Image
                        src={'https://meissasoftwebimages.s3.amazonaws.com/app-develop.png'}
                        layout="fill"
                        placeholder="blur"
                        blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/app-develop.png&w=16&q=1`}
                        loading="lazy"
                        objectFit="cover"
                      />
                    </StyledMobileAppFront>
                    <StyledMobileAppBack>
                      <span>
                        Mobile technologies have become an important platform to conduct business, generate leads and
                        support operations. Mobile platforms are changing very rapidly, as new devices, uses and
                        operating systems have been introduced by the market.
                      </span>
                    </StyledMobileAppBack>
                  </StyledMobileAppContainer>
                </StyledMobileAppGrid>
                <StyledImageDescription>
                  <FormatQuoteIcon style={{ fontSize: 80 }} />
                  <p>
                    Make a long lasting impression with the right combination of colors, shapes, designs, content that
                    will define your brand. Get your work done professionally by hiring Meissasoft and ensure your
                    branding hits the spot with these services.
                  </p>
                </StyledImageDescription>
              </Grid>
              <Grid item md={7} xs={12}>
                <Grid container spacing={4}>
                  <StyledWebAppGrid item xs={12}>
                    <StyledWebAppContainer className="web-container">
                      <StyledWebAppFront>
                        <Image
                          src={'https://meissasoftwebimages.s3.amazonaws.com/web-develop.png'}
                          layout="fill"
                          placeholder="blur"
                          blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/web-develop.png&w=16&q=1`}
                          loading="lazy"
                          objectFit="cover"
                        />
                      </StyledWebAppFront>
                      <StyledWebAppBack>
                        <span>
                          We are a web development company. We provide JavaScript and Python Development. Let us help
                          you build a great product by using frameworks like React, Vue.js, Node.js, Next js, Nest.js,
                          Fast , Django and Flask.
                        </span>
                      </StyledWebAppBack>
                    </StyledWebAppContainer>
                  </StyledWebAppGrid>
                  <Grid item xs={12}>
                    <Grid container spacing={4}>
                      <StyledBackendDevelopGrid item md={6} xs={12}>
                        <StyledBackendDevelopContainer className="it-container">
                          <StyledBackendDevelopFront>
                            <Image
                              src={'https://meissasoftwebimages.s3.amazonaws.com/backend-develop.png'}
                              layout="fill"
                              placeholder="blur"
                              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/backend-develop.png&w=16&q=1`}
                              loading="lazy"
                              objectFit="cover"
                            />
                          </StyledBackendDevelopFront>
                          <StyledBackendDevelopBack>
                            <span>
                              We use the full potential of programming languages by taking advantage of modern
                              frameworks and libraries. There are many reasons why we use JavaScript & Python & Go Lang
                              for Api Development.
                            </span>
                          </StyledBackendDevelopBack>
                        </StyledBackendDevelopContainer>
                      </StyledBackendDevelopGrid>
                      <StyledDevopsGrid item md={6} xs={12}>
                        <StyledDevopsContainer className="devops-container">
                          <StyledDevopsFront>
                            <Image
                              src={'https://meissasoftwebimages.s3.amazonaws.com/devops.jpg'}
                              layout="fill"
                              placeholder="blur"
                              blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/devops.jpg&w=16&q=1`}
                              loading="lazy"
                              objectFit="cover"
                            />
                          </StyledDevopsFront>
                          <StyledDevopsBack>
                            <span>
                              We provide cloud management services, we build architecture for applications in the Cloud
                              (AWS), we configure CI/CD Process and provide maintenance & monitoring services.
                            </span>
                          </StyledDevopsBack>
                        </StyledDevopsContainer>
                      </StyledDevopsGrid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledGrid>
    </>
  );
};

export default SectionServices;

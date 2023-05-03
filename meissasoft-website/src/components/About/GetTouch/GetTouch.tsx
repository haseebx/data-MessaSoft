import { useState } from 'react';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Grid from '@mui/material/Grid';

import {
  StyledGrid,
  StyledInput,
  Heading,
  Span,
  P,
  StyledButton,
  H3,
  P2,
  P1,
  DivLayout,
  H1,
  Para,
  DivStyled,
  Para1,
  TextAreaInput,
} from './GetTouch.styles';

const GetTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  return (
    <StyledGrid container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container spacing={3}>
          <Grid item md={4} sm={8} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <DivLayout>Infinite Compute</DivLayout>
              </Grid>
              <Grid item xs={6}>
                <DivLayout>Galaxi</DivLayout>
              </Grid>
              <Grid item xs={6}>
                <DivLayout>Plan Well</DivLayout>
              </Grid>
              <Grid item xs={6}>
                <DivLayout>Video Kyc</DivLayout>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <H3>Our Professional Clients</H3>
            </Grid>
            <Grid item xs={12}>
              <P2>
                We believe in not just providing a service to our clients but forming a relationship based on
                understanding our client’s needs and then developing a solution based on those needs. However, our
                relationship does not end there as we continue to monitor and address any situations that might arise.
                This only strengthens the relationship and the success of the all our clients.
              </P2>
            </Grid>
            <Grid item xs={12} display="flex" flexDirection="row">
              <P1>
                <ArrowRightAltIcon />
              </P1>
              <Para>R E A D M O R E</Para>
            </Grid>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <Heading>Get In Touch</Heading>
            <Span>
              We will set up an initial appointment to understand your particular business goals and objectives for
              using space data in a software application. We can then produce a detailed roadmap to help you succeed.
            </Span>
            <Grid container display="flex" flexDirection="column">
              <Grid item md={6} sm={12} xs={12}>
                <P>Meissasoft Developers</P>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <P>info@meissasoft.com</P>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <P>+923124455287</P>
              </Grid>
              <Grid item xs={12} sm={10} md={10}>
                <Grid container>
                  <Grid item md={12} xs={12}>
                    <DivStyled>
                      <ArrowRightAltIcon />
                      <Para1>R E A D M O R E</Para1>
                    </DivStyled>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <H1>Ask Us Anything</H1>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <StyledInput
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <StyledInput
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextAreaInput
                placeholder="Message"
                name="message"
                value={subject}
                style={{ marginTop: '30px' }}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton>SEND MESSAGE</StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};
export default GetTouch;

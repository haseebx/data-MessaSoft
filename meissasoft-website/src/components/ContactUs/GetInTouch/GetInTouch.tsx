import Image from 'next/image';

import { useState } from 'react';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RoomIcon from '@mui/icons-material/RoomOutlined';
import Grid from '@mui/material/Grid';

import TextareaInput from '../../core/FieldInput/TextareaInput';
import {
  StyledGrid,
  DivTitle,
  Span,
  StyledInput,
  StyledButton,
  Div,
  H3,
  P3,
  P5,
  StyledImageDiv,
  Heading,
  Span1,
} from './GetInTouch.styles';

const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  return (
    <StyledGrid container>
      <Grid item md={8} xs={12}>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <StyledImageDiv>
              <Image
                src={'https://meissasoftwebimages.s3.amazonaws.com/contact-us-1.jpg'}
                layout="fill"
                placeholder="blur"
                blurDataURL={`/_next/image?url=https://meissasoftwebimages.s3.amazonaws.com/contact-us-1.jpg&w=16&q=1`}
                loading="lazy"
                objectFit="cover"
              />
              <Grid item md={12} sm={12} xs={12}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Div>
                    <H3>Head Office</H3>
                    <Span>
                      <RoomIcon />
                      <P5> Lahore, Pakistan</P5>
                    </Span>
                    <P3>
                      <PhoneInTalkIcon />
                      <P5> +923124235813</P5>
                    </P3>
                    <P3>
                      <MailOutlineIcon />
                      <P5> info@meissasoft.com</P5>
                    </P3>
                  </Div>
                </Grid>
              </Grid>
            </StyledImageDiv>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container spacing={3}>
              <Grid item md={12} sm={12} xs={12}>
                <DivTitle>GET IN TOUCH</DivTitle>

                <Heading>Send Us Message</Heading>
                <Span1>Please get in touch and our expert support team will answer your questions</Span1>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <StyledInput
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <StyledInput
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <StyledInput
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <StyledInput
                  placeholder="Subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextareaInput
                  rows="5"
                  placeholder="Message"
                  name="message"
                  style={{ marginTop: '30px ' }}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <StyledButton>S E N D</StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default GetInTouch;

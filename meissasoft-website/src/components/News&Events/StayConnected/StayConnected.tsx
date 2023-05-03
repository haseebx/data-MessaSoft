import { useState } from 'react';

import Grid from '@mui/material/Grid';

import { isValidateEmail } from '@/utils/helper';

import {
  StyledGrid,
  Container,
  Heading,
  Span,
  StyledButton,
  StyledInput,
  StyledErrorP,
  StyledDivider,
} from './StayConnected.styles';

const StayConnected = () => {
  const [error, setError] = useState<any>(false);
  const [email, setEmail] = useState('');

  const onChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length > 0 && error === true) {
      setError(false);
    }
  };
  const handleSub = () => {
    if (email.length === 0) {
      setError(true);
    } else {
      setError(!isValidateEmail(email));
    }
  };
  return (
    <Container container>
      <StyledGrid container>
        <Grid item md={2} xs={8}>
          <StyledDivider>STAY CONNECTED</StyledDivider>
        </Grid>
      </StyledGrid>
      <StyledGrid item xs={12}>
        <Heading>Subscribe Newsletter</Heading>
      </StyledGrid>
      <StyledGrid item xs={12}>
        <Span>Please get in touch and our expert support team will answer your questions</Span>
      </StyledGrid>
      <StyledGrid container spacing={2}>
        <Grid item xs={12} md={4} display="flex" flexDirection="column">
          <StyledInput name="email" placeholder="Email" value={email} onChange={onChange} />
          {error && <StyledErrorP>Please enter a valid email</StyledErrorP>}
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledButton onClick={handleSub}>subscribe</StyledButton>
        </Grid>
      </StyledGrid>
    </Container>
  );
};
export default StayConnected;

import ContactPhone from '@mui/icons-material/ContactPhone';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import LocationOn from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import { Field, Formik, Form } from 'formik';

import { contactValidation } from '@/validations/contact';

import {
  StyledGrid,
  StyledLocationGrid,
  DivWrapper,
  Heading,
  P,
  StyledInput,
  StyledButton,
  TextAreaInput,
  HeadingStarted,
  StyledContactGrid,
  StyledDivider,
  ErrorMessage,
} from './SectionContact.style';

interface Values {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SectionContact = () => {
  const initialValue: Values = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const onFormSubmit = async () => {};
  return (
    <StyledGrid container>
      <StyledLocationGrid item md={8} xs={10}>
        <Grid container>
          <Grid item md={4} xs={12}>
            <Grid container spacing={1}>
              <Grid item className="icon" xs={12} md={2}>
                <DivWrapper>
                  <LocationOn />
                </DivWrapper>
              </Grid>
              <Grid item className="location" xs={12} md={10}>
                <Heading>Lahore, Punjab</Heading>
                <P>Pakistan</P>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container spacing={1}>
              <Grid item className="icon" xs={12} md={2}>
                <DivWrapper>
                  <EmailOutlined />
                </DivWrapper>
              </Grid>
              <Grid item className="location" xs={12} md={10}>
                <Heading>info@meissasoft.com</Heading>
                <P>Email Contact</P>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container spacing={1}>
              <Grid item className="icon" xs={12} md={2}>
                <DivWrapper>
                  <ContactPhone />
                </DivWrapper>
              </Grid>
              <Grid item className="location" xs={12} md={10}>
                <Heading>+923124455287</Heading>
                <P>Contact Number</P>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledLocationGrid>
      <StyledContactGrid item md={8} xs={10}>
        <Grid container>
          <Grid item md={4} sm={12} xs={12}>
            <StyledDivider textAlign="right">GET STARTED </StyledDivider>
            <HeadingStarted>Get Started & Tell Us About Your Requirements</HeadingStarted>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Formik initialValues={initialValue} onSubmit={onFormSubmit} validationSchema={contactValidation}>
              {({ values, errors }) => {
                return (
                  <Form>
                    <Grid container spacing={3}>
                      <Grid item md={6} sm={12} xs={12}>
                        <Field
                          as={StyledInput}
                          id="name"
                          placeholder="Name"
                          name="name"
                          autoComplete="off"
                          value={values.name}
                          error={errors.name}
                        />
                        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                        <Field
                          as={StyledInput}
                          id="email"
                          placeholder="Email"
                          name="email"
                          autoComplete="off"
                          value={values.email}
                          error={errors.email}
                        />
                        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                      </Grid>
                      <Grid item md={12} sm={12} xs={12}>
                        <Field
                          as={StyledInput}
                          id="subject"
                          placeholder="Subject"
                          name="subject"
                          autoComplete="off"
                          value={values.subject}
                          error={errors.subject}
                        />
                        {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
                      </Grid>
                      <Grid item md={12} sm={12} xs={12}>
                        <Field
                          as={TextAreaInput}
                          id="message"
                          placeholder="Message"
                          name="message"
                          autoComplete="off"
                          value={values.message}
                          error={errors.message}
                        />
                        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                      </Grid>
                      <Grid item md={12} sm={12} xs={12}>
                        <StyledButton>S E N D</StyledButton>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </StyledContactGrid>
    </StyledGrid>
  );
};

export default SectionContact;

import Head from 'next/head';

import Contact from '@/components/ContactUs/Contact';
import GetInTouch from '@/components/ContactUs/GetInTouch';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Wrapper } from './index.styles';

/**
 *
 * @returns contactus page
 */
const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | MeissaSoft</title>
        <meta name="description" content="Official Website of Meissasoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <Contact />
        <GetInTouch />
        <Footer />
      </Wrapper>
    </>
  );
};

export default ContactUs;

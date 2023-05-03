import Head from 'next/head';

import GetTouch from '@/components/About/GetTouch';
import OurHistory from '@/components/About/OurHistory';
import SectionAboutUs from '@/components/About/SectionAboutUs';
import SectionExpertise from '@/components/About/SectionExpertise';
import SectionFounder from '@/components/About/SectionFounder';
import SectionIntro from '@/components/About/SectionIntro';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Wrapper } from './index.styles';
/**
 *
 * @returns about page
 */
const About = () => {
  return (
    <>
      <Head>
        <title>About | MeissaSoft</title>
        <meta name="description" content="Official Website of Meissasoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <SectionIntro />
        <SectionAboutUs />
        <SectionExpertise />
        <SectionFounder />
        <OurHistory />
        <GetTouch />
        <Footer />
      </Wrapper>
    </>
  );
};

export default About;

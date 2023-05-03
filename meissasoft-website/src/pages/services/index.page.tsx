import Head from 'next/head';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OurServices from '@/components/Services/OurServices';
import SectionChoose from '@/components/Services/SectionChoose';
import SectionServices from '@/components/Services/SectionServices';
import SectionSlider from '@/components/Services/SectionSlider';
import SectionSoftware from '@/components/Services/SectionSoftware';
import SectionTestimonial from '@/components/Services/SectionTestimonial';
import SectionTouch from '@/components/Services/SectionTouch';
import { getAllClientThunk } from '@/store/app/appSlice';

import { Wrapper } from './index.styles';

/**
 *
 * @returns services page
 */
const Services = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClientThunk());
  }, []);

  return (
    <>
      <Head>
        <title>Services | MeissaSoft</title>
        <meta name="description" content="Official Website of Meissasoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <SectionServices />
        <SectionSoftware />
        <SectionSlider />
        <OurServices />
        <SectionChoose />
        <SectionTestimonial />
        <SectionTouch />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Services;

import Head from 'next/head';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionTestimonial from '@/components/Testimonials/SectionTestimonial';
import SuccessStories from '@/components/Testimonials/SuccessStories';
import Testimonials from '@/components/Testimonials/Testimonials';
import TotalProjects from '@/components/Testimonials/TotalProjects';
import { getAllClientThunk } from '@/store/app/appSlice';

import { Wrapper } from './index.styles';

/**
 *
 * @returns Testimonial page
 */
const Testimonial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClientThunk());
  }, []);

  return (
    <>
      <Head>
        <title>Testimonials | MeissaSoft</title>
        <meta name="description" content="Official Website of Meissasoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <Testimonials />
        <SuccessStories />
        <SectionTestimonial />
        <TotalProjects />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Testimonial;

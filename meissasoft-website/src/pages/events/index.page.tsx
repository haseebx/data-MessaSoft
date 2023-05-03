import Head from 'next/head';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionIntro from '@/components/News&Events/SectionIntro';
import SectionViewed from '@/components/News&Events/SectionViewed';
import StayConnected from '@/components/News&Events/StayConnected';
import { getAllEventsThunk } from '@/store/app/appSlice';

import { Wrapper } from './index.styles';

/**
 *
 * @returns events page
 */
const Events = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEventsThunk());
  }, []);
  return (
    <>
      <Head>
        <title>Events | MeissaSoft</title>
        <meta name="description" content="Official Website of Meissasoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Header />
        <SectionIntro />
        <SectionViewed />
        <StayConnected />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Events;

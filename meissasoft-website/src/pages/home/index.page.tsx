import Head from 'next/head';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import SectionFounder from '@/components/About/SectionFounder';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionBusiness from '@/components/Home/SectionBusiness';
import SectionChoose from '@/components/Home/SectionChoose';
import SectionContact from '@/components/Home/SectionContact';
import SectionEvents from '@/components/Home/SectionEvents';
import SectionProcess from '@/components/Home/SectionProcess';
import SectionServices from '@/components/Home/SectionServices';
import SectionSlide from '@/components/Home/SectionSlide';
import SectionTeams from '@/components/Home/SectionTeams';
import {
  getAllProjectThunk,
  getAllCareersThunk,
  getAllEventsThunk,
  getAllTeamThunk,
  getAllClientThunk,
} from '@/store/app/appSlice';

import { Wrapper } from './index.styles';

/**
 *
 * @returns home page
 */
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjectThunk());
    dispatch(getAllCareersThunk());
    dispatch(getAllTeamThunk());
    dispatch(getAllClientThunk());
    dispatch(getAllEventsThunk());
  }, []);

  return (
    <>
      <Head>
        <title>Home | MeissaSoft</title>
        <meta name="description" content="Official Website of Meissasoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Header />
        <SectionBusiness />
        <SectionServices />
        <SectionFounder />
        <SectionTeams />
        <SectionChoose />
        <SectionProcess />
        <SectionSlide />
        <SectionEvents />
        <SectionContact />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;

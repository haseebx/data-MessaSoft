import Head from 'next/head';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import SectionIntro from '@/components/Careers/SectionIntro';
import SectionJobOpenings from '@/components/Careers/SectionJobOpenings';
import SectionOffering from '@/components/Careers/SectionOffering';
import SectionProcess from '@/components/Careers/SectionProcess';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getAllCareersThunk } from '@/store/app/appSlice';

import { Wrapper } from './index.styles';
/**
 *
 * @returns Careers page
 */
const Careers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCareersThunk());
  }, []);
  return (
    <>
      <Head>
        <title>Careers | MeissaSoft</title>
        <meta name="description" content="Official Website of Meissasoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <SectionIntro />
        <SectionProcess />
        <SectionJobOpenings />
        <SectionOffering />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Careers;

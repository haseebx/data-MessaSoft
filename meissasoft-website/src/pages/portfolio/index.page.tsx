import Head from 'next/head';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionContact from '@/components/Portfolio/SectionContact';
import SectionIntro from '@/components/Portfolio/SectionIntro';
import SectionProcess from '@/components/Portfolio/SectionProcess';
import SectionProjects from '@/components/Portfolio/SectionProjects';
import { getAllProjectThunk } from '@/store/app/appSlice';

import { Wrapper } from './index.styles';

/**
 *
 * @returns portfloio page
 */
const Portfolio = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProjectThunk());
  }, []);
  return (
    <>
      <Head>
        <title>Projects | MeissaSoft</title>
        <meta name="description" content="Official Website of Meissasoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <SectionIntro />
        <SectionProcess />
        <SectionProjects />
        <SectionContact />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Portfolio;

import Head from 'next/head';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JoinOurTeam from '@/components/Team/JoinOurTeam';
import OurTeam from '@/components/Team/Team';
import TeamValues from '@/components/Team/TeamValues';
import TheTeams from '@/components/Team/TheTeams';
import { getAllTeamThunk } from '@/store/app/appSlice';

import { Wrapper } from './index.styles';

/**
 *
 * @returns team page
 */
const Team = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTeamThunk());
  }, []);

  return (
    <>
      <Head>
        <title>Team | MeissaSoft</title>
        <meta name="description" content="Official Website of Meissasoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <OurTeam />
        <TheTeams />
        <TeamValues />
        <JoinOurTeam />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Team;

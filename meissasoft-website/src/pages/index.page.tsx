import Head from 'next/head';

import HomePage from './home/index.page';

/**
 *
 * @returns Landing page
 */
export default function LandingPage() {
  return (
    <>
      <Head>
        <title>MeissaSoft</title>
        <meta name="description" content="Official Website of Meissasoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}

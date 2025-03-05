// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Name | Portfolio</title>
        <meta name="description" content="Showcasing my software and hackathon projects." />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio!</h1>
        <p className="text-lg">I'm a software developer and hackathon enthusiast.</p>
      </div>
    </>
  );
};

export default Home;

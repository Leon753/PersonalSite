// pages/about.tsx
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | My Portfolio</title>
        <meta name="description" content="Learn more about me and my journey as a developer." />
      </Head>
      <div>
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p>
          I am a software developer with a passion for building impactful projects and participating in hackathons.
          [Add more details about your background, skills, and interests.]
        </p>
      </div>
    </>
  );
}

// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Name | Portfolio</title>
        <meta
          name="description"
          content="Showcasing my software and hackathon projects."
        />
      </Head>
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 text-white">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Hi, I&apos;m Leon</h1>
          <p className="text-xl mb-6 text-gray-800">
            Full-Stack Developer & ML Engineer | Passionate about Scalable System Design
          </p>
          <Link href="/projects" className="px-6 py-3 bg-white text-gray-800 font-semibold rounded hover:bg-gray-200">
            View My Work
          </Link>
          {/* Picture Section */}
          <div className="mt-8">
            <Image
              src="/IMG_2586.jpg"
              alt="Me in front of the SF Bay Bridge"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Brief Introduction/Bio Section */}
        <section className="py-16 px-4 container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800  mb-4">About Me</h2>
          <div className="text-lg text-gray-800 leading-relaxed space-y-4">
            <p>
              I&apos;m a passionate developer who thrives on tackling complex challenges
              and delivering innovative solutions. I graduated in 2022 from UC Berkeley
              with a Bachelor’s in Electrical Engineering and Computer Science (EECS).
              During my time at Berkeley, I served as an undergraduate researcher in the
              fluid dynamics laboratory and founded a robotics club that grew to over 30
              students.
            </p>
            <p>
            During a challenging nine-month internship at a fast-paced startup, I 
            performed algorithm-intensive data transformations and developed automated 
            model evaluation software for A/B testing and MLOps. I also trained and 
            optimized deep NLP models across various tasks, and built robust cascading 
            interfaces across microservices—all of which sharpened my ability to deliver 
            production-ready code in a dynamic environment.
            </p>
            <p>
              Since graduation, I have spent the past two years developing automation tooling
              at a Fortune 500 company, where I lead the AI initiative for our team. In addition
              to my professional work, I have been building personal projects on the side using
              the latest tools and frameworks. These side projects allow me to experiment with
              emerging technologies and continuously refine my skillset.
            </p>
            <p>
              This blend of academic rigor, hands-on startup experience, corporate innovation,
              and personal exploration has equipped me with a unique perspective and a deep
              technical foundation to drive impactful projects.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

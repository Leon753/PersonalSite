// pages/now.tsx
import Head from 'next/head';

export default function Now() {
  return (
    <>
      <Head>
        <title>Now | My Portfolio</title>
        <meta name="description" content="What I'm currently working on." />
      </Head>
      <div>
        <h1 className="text-3xl font-bold mb-4">Now</h1>
        <p>
          I'm currently focused on building my personal website with Next.js, TypeScript, and Tailwind CSS. I'm also exploring new features in modern web development and working on several exciting projects.
        </p>
        <p>
          [Feel free to update this section regularly with your latest activities, learnings, or project progress.]
        </p>
      </div>
    </>
  );
}

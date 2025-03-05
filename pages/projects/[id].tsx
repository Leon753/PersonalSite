// pages/projects/[id].tsx
import { useRouter } from 'next/router';
import Head from 'next/head';

// Dummy data for demonstration.
const projectData: Record<string, { title: string; description: string; link: string }> = {
  '1': {
    title: 'Project One',
    description: 'Detailed information about project one.',
    link: 'https://github.com/yourusername/project-one',
  },
  '2': {
    title: 'Project Two',
    description: 'Detailed information about project two.',
    link: 'https://github.com/yourusername/project-two',
  },
};

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectData[id as string];

  if (!project) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{project.title} | My Portfolio</title>
        <meta name="description" content={project.description} />
      </Head>
      <div>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p>{project.description}</p>
        <p className="mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </>
  );
}

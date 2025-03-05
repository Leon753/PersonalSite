// pages/projects.tsx
import Head from 'next/head';
import Link from 'next/link';

const projects = [
  { id: '1', title: 'Project One', description: 'A brief overview of project one.' },
  { id: '2', title: 'Project Two', description: 'A brief overview of project two.' },
  // Add additional projects as needed.
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
        <meta name="description" content="A showcase of my projects." />
      </Head>
      <div>
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="mb-4">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p>{project.description}</p>
              <Link href={`/projects/${project.id}`} className="text-blue-500 hover:underline">
                    View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

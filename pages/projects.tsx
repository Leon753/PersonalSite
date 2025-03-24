// pages/projects.tsx
import Head from 'next/head';
import Link from 'next/link';

const projects = [
  { id: '1', title: 'Job Hunt Tool', description: 'A job hunting tool that helps people organize and prepare for interviews' },
  { id: '2', title: 'Fyts', description: 'Building a personal styling and social fashion app! I\m super excited about it and having lots of fun building the app.' },
  { id: '3', title: 'AI-Powered Lecture Note-Taking', description: 'A notetaking application that will take notes of an uploaded audio file' },
  { id: '4', title: 'Tile Heights', description: 'I\'m building a front-facing e-commerce site and an admin page to manage the website' },
  { id: '5', title: 'BEAR', description: 'Unmanned surface vehicle project at UC Berkeley. Showcased at Neutral Buoyancy Laboratory at NASA' },
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
              <h2 className="text-2xl font-semibold">
                {project.title}
                {(project.id === '1' || project.id === '2') && (
                  <span className="ml-2 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Active
                  </span>
                )}
              </h2>
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

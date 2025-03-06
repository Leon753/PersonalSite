// pages/projects.tsx
import Head from 'next/head';
import Link from 'next/link';

const projects = [
  { id: '1', title: 'Tile Heights', description: 'I\'m building a front-facing e-commerce site and an admin page to manage the website' },
  { id: '2', title: 'Note Taker', description: 'I\'m building a notetaking application that will take notes of an uploaded audio file' },
  { id: '3', title: 'JobHuntTool', description: 'This project started from a Hackathon and the goal of the tool is to help job seekers' },
  { id: '4', title: 'BEAR', description: 'Unmanned surface vehicle project at UC Berkeley. Showcased at Neutral Buoyancy Laboratory at NASA' },
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

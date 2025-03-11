// pages/projects/[id].tsx
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import Head from 'next/head';

const projectData: Record<
  string,
  { title: string; description: string; link: string; site: string }
> = {
  '2': {
    title: 'Tile Heights',
    description: 'Detailed information about project one.',
    link: 'https://tileheights.com',
    site: 'View Website'
  },
  '3': {
    title: 'Note Taker',
    description: 'Detailed information about project two.',
    link: 'https://github.com/Leon753/AINotes',
    site: 'View on Github'
  },
  '1': {
    title: 'Job Hunt Tool',
    description: `JobHunter is a Chrome extension that emerged from a hackathon by a team of three innovators. It’s designed to simplify and enhance the job-hunting process by seamlessly integrating with Gmail and Google Sheets. JobHunter bundles three essential features into one powerful tool:

- **AI-Powered Organization:** Automates job application tracking by retrieving emails from Gmail, using advanced AI (via CrewAI) to online data like job info, interview questions, and pay range, and organizing everything into a Google Sheet for easy tracking and analysis.

Looking ahead, we’re excited to expand JobHunter’s capabilities with additional features, including:
- **Resume Upload & Analysis:** A feature that lets you upload your resume for AI-driven analysis and tailored interview advice.
- **Mock Phone Interviews:** An AI-driven module that simulates realistic phone interviews and provides targeted feedback.

Overall, JobHunter aims to be a comprehensive tool for job seekers, automating tedious tasks and offering personalized insights to boost your chances of success.`,
    link: 'https://github.com/Leon753/JobHuntTool',
    site: 'View on Github'
  },
  '4': {
    title: 'BEAR',
    description: 'Detailed information about project two.',
    link: 'https://www.ocf.berkeley.edu/~rwhittaker/',
    site: 'View Website'
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
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6">{project.title}</h1>
        <div className="prose dark:prose-dark">
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => <p className="mb-6" {...props} />,
              strong: ({ node, ...props }) => (
                <strong className="font-bold text-lg" {...props} />
              ),
              // Add bottom margin to ordered lists
              ol: ({ node, ...props }) => <ol className="mb-6" {...props} />,
              ul: ({ node, ...props }) => <ul className="mb-6" {...props} />,
            }}
          >
            {project.description}
          </ReactMarkdown>
        </div>
        <div className="mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            {project.site}
          </a>
        </div>
      </div>
    </>
  );
}

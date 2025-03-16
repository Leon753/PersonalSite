// pages/projects/[id].tsx
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import Head from 'next/head';
import remarkGfm from "remark-gfm"

const projectData: Record<
  string,
  { title: string; description: string; link: string; site: string }
> = {
  '2': {
    title: 'Tile Heights',
    description: `
Tile Heights is an e-commerce platform designed to bridge the gap between marble mosaic wholesalers and retailers, streamlining the procurement process. It includes a dedicated admin dashboard for store management, enabling product inventory control, order tracking, and customer interactions.

### **Tech Stack**
- **Frontend & Backend:**  Developed with Next.js (TypeScript) for a modern, high-performance full-stack experience.
- **Database:** Uses MongoDB for flexible and scalable data storage.
- **Payment Process:** Integrated with Stripe to handle secure transactions.
- **SSO:** Implements Google OAuth for seamless Single Sign-On (SSO).

### **Next Steps**  
- **Complete Landing Page:** Improve design and content to better showcase product offerings and attract customers.
- **Refactor For Scalability:** Optimize architecture by decoupling key components and offloading certain business logic to a Python-based backend.
- **Testing:** Conduct stress tests to ensure stability, scalability, and smooth user experience under high traffic.
    `,
    link: 'https://tileheights.com',
    site: 'View Website'
  },
  '3': {
    title: 'AI-Notes: AI-Powered Lecture Note-Taking',
    description: `
AI-Notes is an intelligent note-taking tool designed to help users efficiently capture and summarize lecture audio. By leveraging state-of-the-art AI models, it transcribes spoken content into text and generates concise, structured summaries, making it easier to review and retain key information.  

### **Tech Stack**  
- **Frontend:** Built with Next.js (TypeScript) for a fast and responsive user experience.  
- **Backend:** Powered by FastAPI, ensuring high performance and scalability.  
- **Database:** PostgreSQL for structured and efficient data storage.  
- **AI:** GPT-4 to get accurate transcription and condense transcripts into digestible notes.

### **Next Steps**  
- **Remove S3 Storage:** Eliminate the need to store audio files, as transcription occurs in real-time.  
- **Implement SSO (Single Sign-On):** Provide users with authentication options to ensure persistent access to their saved notes.`,

    link: 'https://github.com/Leon753/AINotes',
    site: 'View on Github'
  },
  '1': {
    title: 'Job Hunt Tool',
    description: `
JobHunter is a Chrome extension built by a team of three innovators, designed to streamline and enhance the job search process. By integrating seamlessly with Gmail and Google Sheets, it helps job seekers track applications, optimize outreach, and receive AI-driven insights—all within one powerful tool.

### **Tech Stack**  
- **Frontend:** Built with React for a dynamic and responsive user experience.
- **Backend:** Powered by FastAPI, ensuring high performance and scalability.
- **Database:** Uses VectorDB for intelligent search capabilities and SQLite for structured data storage.
- **AI:** Leverages CrewAI for orchestrating AI agents, Perplexity and ChatGPT for conducting summarization and finding and formatting data

### **Next Steps**  
- **AI-Powered Mock Interviews:** Implement a feature that simulates realistic phone interviews and provides targeted feedback to improve candidate performance.
- **Resume Upload & Analysis:** Enable users to upload resumes for AI-driven evaluations, offering tailored interview advice and optimization suggestions.
- **Performance & UX Enhancements:** Improve the first feature by refining data generation, enhancing spreadsheet formatting, migrating to MongoDB, and reducing latency for a smoother user experience.`,
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
            remarkPlugins={[remarkGfm]} // Enables parsing of lists, tables, and more
            components={{
              h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mt-6" {...props} />,
              p: ({ node, ...props }) => <p className="mb-4" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc ml-5 mb-4" {...props} />,
              li: ({ node, ...props }) => <li className="mb-1" {...props} />,
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

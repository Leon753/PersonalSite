// pages/contact.tsx
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
        <meta name="description" content="Get in touch with me." />
      </Head>
      <div>
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p>
          You can reach me via email at: 
          <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">
            your.email@example.com
          </a>
        </p>
        {/* Optionally, add a contact form here */}
      </div>
    </>
  );
}

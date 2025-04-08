// components/Layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-lg">Leons Portfolio</div>
          <div className="flex items-center">
            <Link href="/" className="ml-4">Home</Link>
            <Link href="/projects" className="ml-4">Projects</Link>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/leonliu1839"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/leon753"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              GitHub
            </a>
            <a
              href="/LeonsFullStackResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} Leon Liu
      </footer>
    </div>
  );
}

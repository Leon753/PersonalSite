// components/Layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="font-bold">My Portfolio</div>
          <div>
            <Link href="/" className="ml-4">Home</Link>
            <Link href="/about" className="ml-4">About</Link>
            <Link href="/projects" className="ml-4">Projects</Link>
            <Link href="/contact" className="ml-4">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} My Portfolio
      </footer>
    </div>
  );
}

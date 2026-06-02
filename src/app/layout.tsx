import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parth Purohit | Senior Front-End Engineer",
  description:
    "Senior Front-End Software Engineer with ~6 years of experience building high-performance, Agentic AI-driven enterprise applications with React, Next.js, and Micro Frontend Architecture.",
  keywords: [
    "React", "Next.js", "TypeScript", "Frontend Engineer",
    "Agentic AI", "Micro Frontend", "LangChain", "LangGraph",
  ],
  authors: [{ name: "Parth Purohit" }],
  openGraph: {
    title: "Parth Purohit | Senior Front-End Engineer",
    description:
      "Senior Front-End Engineer specializing in React, Next.js, and Agentic AI applications.",
    type: "website",
    url: "https://purohitparth.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

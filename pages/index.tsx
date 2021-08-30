import Head from "next/head";
import React, { useState } from "react";

/**
 * @return {JSX.Element}
 */
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.ts!
          </a>
        </h1>

        <p className="mt-3 text-2xl mb-4">
          Get started by editing{" "}
          <code className="p-2 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.tsx
          </code>
        </p>
        <p className="text-md">
          This is a boilerplate from{" "}
          <a
            href="https://github.com/Juan-d-khusuma/jdk-next-boilerplate"
            className="hover:text-blue-700 hover:underline"
          >
            GitHub by Juan-d-Khusuma
          </a>
        </p>

        <div className="flex flex-wrap items-start justify-center max-w-4xl mt-6 sm:w-full">
          <div className="flex">
            <div className="flex flex-col items-start justify-center">
              <button
                className="w-8 h-8 bg-red-600 text-white rounded-md"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
            </div>
            <p className="p-5">{count}</p>
            <div className="flex flex-col items-start justify-center">
              <button
                className="w-8 h-8 bg-blue-600 text-white rounded-md"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';

const Library: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="retro-box p-4">
        <header className="border-b-2 border-gray-400 mb-4 pb-2">
          <div className="header-line">
            <span className="line"></span>
            <span className="title">Library</span>
            <span className="line"></span>
          </div>
          <main className="flex items-start mt-4">
            <div className="flex-grow mr-4">
              <p className="text-gray-300">
                Here you can find all my library resources. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
                venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
                odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
                vitae massa.
              </p>
            </div>
          </main>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/" legacyBehavior>
              <a className="retro-button">Home</a>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Library;

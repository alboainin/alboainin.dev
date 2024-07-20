"use client";

import React from 'react';
import Typewriter from '../components/typewriter';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-main flex items-center justify-center">
      <div className="retro-box p-8"> {/* Increased padding for more content space */}
        <header className="border-b-2 border-gray-400 mb-6 pb-4"> {/* Adjusted margin and padding for spacing */}
          <div className="header-line">
            <span className="line"></span>
            <span className="title">Ali&apos;s Page</span> {/* Escaped single quote */}
            <span className="line"></span>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/projects" legacyBehavior>
              <a className="retro-button">Projects</a>
            </Link>
            <Link href="/library" legacyBehavior>
              <a className="retro-button">Library</a>
            </Link>
            <Link href="/randoms" legacyBehavior>
              <a className="retro-button">Randoms</a>
            </Link>
          </div>
        </header>
        <main className="flex items-start mt-8"> {/* Increased margin-top for better spacing */}
          <div className="flex-grow mr-4">
            <div className="mb-4">
              <Typewriter />
            </div>
            <p className="text-gray-300 text-left mt-4"> {/* Added margin-top for better spacing */}
              Hi there, <br />
              I&apos;m Ali, a CS undergrad @ University of Waterloo. <br /> {/* Escaped single quote */}
              I like to build iOS apps in my free time, and ship products.<br />
              <br />
              Feel free to hit me up on X 😄
            </p>
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src="/pfp.png" alt="Profile Picture" width={160} height={160} className="mx-auto mt-4" /> {/* Added margin-top for better spacing */}
            <div className="social-icons mt-4">
              <a href="https://github.com/alboainin" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="www.alboainin.dev" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} size="2x" /> {/* Corrected the icon */}
              </a>
              <a href="www.linkedin.com/in/ali-a-11a217283" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

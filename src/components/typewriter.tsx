"use client";

import React, { useEffect, useState } from "react";
import "./typewriter.css";

const Typewriter: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    "Developer",
    "Open-source maintener",
    "Building startups for fun",
    "Hobbiest Guitarist",
    "Go Warriors!"
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 35 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  return (
    <div className="container py-5">
      <div className="output">
        <h1>{text}</h1>
        <span className="cursor"></span>
      </div>
    </div>
  );
};

export default Typewriter;

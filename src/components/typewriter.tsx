import React, { useState, useEffect } from 'react';

const Typewriter: React.FC = () => {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textArray = [
    "What do you call an alligator wearing a vest?|An Investigator", 
    "What do you call a fake noodle?|An Impasta", 
    "Why shouldn&apos;t you write with a broken pencil?|Because it&apos;s pointless",
    "Why couldn&apos;t the pirate finish the alphabet?|He kept getting lost at C",
    "What&apos;s brown and sticky?|A stick",
    "What starts with an E, ends with an E and has one letter in it?|An Envelope",
    "What has four wheels, and flies?|A Garbage truck",
    "What do you call a pig that knows Karate?|Pork Chop",
    "Why did the scarecrow get promoted?|He was out standing in his field.",
    "I have a step ladder|I never knew my real ladder.",
    "What kind of shoes do ninjas wear?|Sneakers"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        setTimeout(handleType, isDeleting ? 100 : 200);
      }
    };

    handleType();
  }, [isDeleting, loopNum, textArray]); // Added missing dependencies

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

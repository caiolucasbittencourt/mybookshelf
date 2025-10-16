import React, { useState, useEffect } from "react";

const SplashScreen = ({ onAnimationComplete }) => {
  const [text, setText] = useState("");
  const fullText = "mybookshelf.";
  const typingSpeed = 150;

  useEffect(() => {
    if (text.length === fullText.length) {
      setTimeout(() => {
        onAnimationComplete();
      }, 1000);
      return;
    }

    const typingTimer = setTimeout(() => {
      setText(fullText.slice(0, text.length + 1));
    }, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, onAnimationComplete]);

  return (
    <div className="flex items-center justify-end min-h-screen bg-white">
      <h1 className="flex items-center gap-x-1 text-5xl md:text-9xl font-black tracking-tight text-gray-800">
        <span>{text}</span>
        <span className="cursor-blink">|</span>
      </h1>
    </div>
  );
};

export default SplashScreen;
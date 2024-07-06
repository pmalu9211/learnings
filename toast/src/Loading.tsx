import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl font-bold text-gray-800">
        {"Narrate".split("").map((letter, index) => (
          <span
            key={index}
            className="inline-block animate-bounce"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: "1s",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;

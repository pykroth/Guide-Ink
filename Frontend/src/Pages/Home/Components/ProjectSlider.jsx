import React, { useState } from 'react';

const projects = [1, 2, 3, 4, 5, 6];  // Example project list

export default function ProjectSlider() {
  const [start, setStart] = useState(0);
  const visibleCount = 4; // Number of visible projects at a time
  const projectWidth = 30; // Width of each project card in rem (adjusted to make it larger)

  const next = () => {
    if (start + visibleCount < projects.length) {
      setStart(start + 1); // Move right
    }
  };

  const prev = () => {
    if (start > 0) {
      setStart(start - 1); // Move left
    }
  };

  return (
    <div className="flex items-center justify-center my-4 w-full max-w-4xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="text-white text-3xl mr-2 hover:scale-110 transition-transform"
      >
        &lt;
      </button>

      {/* Project Boxes with Slide Effect */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${start * projectWidth}rem)`, // Adjust based on projectWidth
          }}
        >
          {projects.slice(start, start + visibleCount).map((proj, idx) => (
            <div
              key={idx}
              className="w-30 h-30 bg-gray-400 rounded-lg flex-shrink-0 mx-2 flex items-center justify-center text-sm font-semibold text-black" // Increased width and height
            >
              Project {proj}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="text-white text-3xl ml-2 hover:scale-110 transition-transform"
      >
        &gt;
      </button>
    </div>
  );
}

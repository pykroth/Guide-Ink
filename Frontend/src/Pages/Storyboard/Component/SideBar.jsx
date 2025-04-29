import React, { useState } from 'react';

const shapes = ['Square', 'Circle', 'Triangle'];

const SideBar = () => {
  const [dragging, setDragging] = useState(null);

  const handleDragStart = (e, shape) => {
    setDragging(shape);
    e.dataTransfer.setData('shape', shape);
  };



  return (
    <div className="flex h-screen">
      
      <div className="w-48 bg-gray-200 p-4">
        <h3 className="text-lg font-bold mb-4">Shapes</h3>
        {shapes.map((shape) => (
          <div
            key={shape}
            draggable
            onDragStart={(e) => handleDragStart(e, shape)}
            className="p-2 my-2 bg-white border rounded cursor-pointer hover:bg-gray-100"
          >
            {shape}
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default SideBar;

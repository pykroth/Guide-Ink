import React, { useState } from 'react';

const shapes = ['Square', 'Circle', 'Triangle'];

const DraggableSideMenu = () => {
  const [dragging, setDragging] = useState(null);
  const [placedShapes, setPlacedShapes] = useState([]);

  const testFunction=() => 
  {
    console.log('hi')
  }
  const handleDragStart = (e, shape) => {
    setDragging(shape);
    e.dataTransfer.setData('shape', shape);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const shape = e.dataTransfer.getData('shape');
    const dropZone = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - dropZone.left;
    const y = e.clientY - dropZone.top;
    setPlacedShapes((prev) => [...prev, { shape, x, y }]);
    setDragging(null);
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

      
      <div 
        className="flex-1 bg-gray-50 relative"
        onDragOver={(e) => e.preventDefault()} 
        onDrop={handleDrop}
      >
        {placedShapes.map((item, index) => (
          <div
            key={index}
            className={`absolute ${
              item.shape === 'Square' ? 'w-16 h-16 bg-blue-500' :
              item.shape === 'Circle' ? 'w-16 h-16 bg-green-500 rounded-full' :
              'w-0 h-0 border-l-16 border-r-16 border-b-32 border-transparent border-b-yellow-500'
            }`}
            style={{ left: item.x - 32, top: item.y - 32 }}
            onMouseEnter={() => testFunction()}
          />
        ))}
        {dragging && <p className="text-gray-500">Drop your {dragging} here!</p>}
      </div>
    </div>
  );
};

export default DraggableSideMenu;

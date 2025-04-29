import React, { useState, useRef } from 'react';
import { FaUndo, FaRedo } from 'react-icons/fa'; // Import icons for undo/redo

// Shape Components
const Square = ({ size, shapeColor, fontSize, fontColor, text }) => (
  <div
    className="w-full h-full flex items-center justify-center text-center"
    style={{
      backgroundColor: shapeColor,
      fontSize: fontSize,
      color: fontColor,
    }}
  >
    {text}
  </div>
);

const Circle = ({ size, shapeColor, fontSize, fontColor, text }) => (
  <div
    className="w-full h-full rounded-full flex items-center justify-center text-center"
    style={{
      backgroundColor: shapeColor,
      fontSize: fontSize,
      color: fontColor,
    }}
  >
    {text}
  </div>
);

const Triangle = ({ size, shapeColor, fontSize, fontColor, text }) => (
  <div
    className="absolute left-1/2 top-1/2 flex items-center justify-center"
    style={{
      transform: 'translate(-50%, -50%)',
      width: 0,
      height: 0,
      borderLeft: `${size / 2}px solid transparent`,
      borderRight: `${size / 2}px solid transparent`,
      borderBottom: `${size}px solid ${shapeColor}`,
      fontSize: fontSize,
      color: fontColor,
    }}
  >
    {text}
  </div>
);

// Main Component
const DraggableSideMenu = () => {
  const [dragging, setDragging] = useState(null);
  const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);
  const [placedShapes, setPlacedShapes] = useState([]);
  const [history, setHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);
  const containerRef = useRef();

  // Shape Types
  const shapes = ['Square', 'Circle', 'Triangle'];

  // Handle adding new shapes
  const handleShapeColorChange = (e, index) => {
    const value = e.target.value;
    setPlacedShapes((prev) =>
      prev.map((item, i) => (i === index ? { ...item, shapeColor: value } : item))
    );
    addToHistory();
  };

  const handleFontColorChange = (e, index) => {
    const value = e.target.value;
    setPlacedShapes((prev) =>
      prev.map((item, i) => (i === index ? { ...item, fontColor: value } : item))
    );
    addToHistory();
  };

  const handleTextChange = (e, index) => {
    const newText = e.target.value;
    setPlacedShapes((prev) =>
      prev.map((item, i) => (i === index ? { ...item, text: newText } : item))
    );
    addToHistory();
  };

  const handleShapeSizeChange = (e, index) => {
    const value = parseInt(e.target.value, 10);
    setPlacedShapes((prev) =>
      prev.map((item, i) => (i === index ? { ...item, size: value } : item))
    );
    addToHistory();
  };

  const handleFontSizeChange = (e, index) => {
    const value = parseInt(e.target.value, 10);
    setPlacedShapes((prev) =>
      prev.map((item, i) => (i === index ? { ...item, fontSize: value } : item))
    );
    addToHistory();
  };

  const handleDragStart = (e, shape) => {
    setDragging(shape);
    e.dataTransfer.setData('shape', shape);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const shape = e.dataTransfer.getData('shape');
    const dropZone = containerRef.current.getBoundingClientRect();
    const x = e.clientX - dropZone.left;
    const y = e.clientY - dropZone.top;
    const newShape = {
      shape,
      x,
      y,
      size: 64,
      text: '',
      fontSize: 16,
      fontColor: '#000',
      shapeColor: '#000',
    };

    // Avoid placing shapes on undo
    setPlacedShapes((prev) => [...prev, newShape]);
    addToHistory();
    setRedoHistory([]); // Clear redo history on new action
  };

  const handleDelete = (index) => {
    setPlacedShapes((prev) => prev.filter((_, i) => i !== index));
    setSelectedShapeIndex(null);
    addToHistory();
  };

  const handleShapeMouseDown = (e, index) => {
    e.preventDefault();
    setDragging(index);
    setSelectedShapeIndex(index); // Set the sidebar to show the selected shape properties
  };

  const handleMouseMove = (e) => {
    if (typeof dragging === 'number') {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newX = e.clientX - containerRect.left - 32;
      const newY = e.clientY - containerRect.top - 32;

      setPlacedShapes((prev) =>
        prev.map((item, i) => (i === dragging ? { ...item, x: newX, y: newY } : item))
      );
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  // Add action to history for undo
  const addToHistory = () => {
    setHistory((prev) => [...prev, placedShapes]);
  };

  // Undo functionality
  const handleUndo = () => {
    if (history.length > 1) {
      setRedoHistory((prev) => [history[history.length - 1], ...prev]);
      setPlacedShapes(history[history.length - 2]);
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  // Redo functionality
  const handleRedo = () => {
    if (redoHistory.length > 0) {
      const nextState = redoHistory[0];
      setPlacedShapes(nextState);
      setHistory((prev) => [...prev, nextState]);
      setRedoHistory((prev) => prev.slice(1));
    }
  };

  // Render Sidebar Shape
  const renderSidebarShape = (shape) => {
    switch (shape) {
      case 'Square':
        return <div className="w-8 h-8 bg-blue-500" />;
      case 'Circle':
        return <div className="w-8 h-8 bg-green-500 rounded-full" />;
      case 'Triangle':
        return (
          <div
            className="w-0 h-0"
            style={{
              borderLeft: '16px solid transparent',
              borderRight: '16px solid transparent',
              borderBottom: '32px solid #facc15',
            }}
          />
        );
      default:
        return shape;
    }
  };

  return (
    <div
      className="flex h-screen"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="w-48 bg-gray-200 flex flex-col justify-between">
        <div>
          {/* Back Button */}
          <button className="bg-blue-500 text-white p-1 rounded mt-2 ml-2 text-sm">
            Back
          </button>

          {/* Shapes Grid */}
          <div className="grid grid-cols-2 gap-2 mt-6 pl-2">
            {shapes.map((shape) => (
              <div
                key={shape}
                draggable
                onDragStart={(e) => handleDragStart(e, shape)}
                className="p-2 bg-white border rounded cursor-pointer hover:bg-gray-100 flex items-center justify-center h-16 w-16"
              >
                {renderSidebarShape(shape)}
              </div>
            ))}
          </div>
        </div>

        {/* Undo/Redo Buttons at Bottom */}
        <div className="flex justify-between items-center p-4">
          <button
            onClick={handleUndo}
            disabled={history.length <= 1}
            className="bg-gray-300 p-2 rounded hover:bg-gray-400"
          >
            <FaUndo />
          </button>
          <button
            onClick={handleRedo}
            disabled={redoHistory.length === 0}
            className="bg-gray-300 p-2 rounded hover:bg-gray-400"
          >
            <FaRedo />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex-1 bg-gray-50 relative"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {placedShapes.map((item, index) => (
          <div
            key={index}
            className="absolute group"
            style={{
              left: item.x,
              top: item.y,
              width: item.size,
              height: item.size,
            }}
            onMouseDown={(e) => handleShapeMouseDown(e, index)}
          >
            <button
              className="absolute -top-3 -right-3 z-20 hidden group-hover:block bg-red-500 text-white text-xs px-2 rounded hover:bg-red-600"
              onClick={() => handleDelete(index)}
            >
              X
            </button>

            <div className="w-full h-full relative border border-transparent group-hover:border-gray-300">
              {item.shape === 'Square' && (
                <Square
                  size={item.size}
                  shapeColor={item.shapeColor}
                  fontSize={item.fontSize}
                  fontColor={item.fontColor}
                  text={item.text}
                />
              )}
              {item.shape === 'Circle' && (
                <Circle
                  size={item.size}
                  shapeColor={item.shapeColor}
                  fontSize={item.fontSize}
                  fontColor={item.fontColor}
                  text={item.text}
                />
              )}
              {item.shape === 'Triangle' && (
                <Triangle
                  size={item.size}
                  shapeColor={item.shapeColor}
                  fontSize={item.fontSize}
                  fontColor={item.fontColor}
                  text={item.text}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedShapeIndex !== null && (
        <div className="w-48 bg-white p-4">
          <h3 className="text-xl">Edit Shape</h3>
          <input
            type="text"
            value={placedShapes[selectedShapeIndex].text}
            onChange={(e) => handleTextChange(e, selectedShapeIndex)}
            placeholder="Shape Text"
            className="p-2 mb-4 w-full"
          />
          <input
            type="color"
            value={placedShapes[selectedShapeIndex].shapeColor}
            onChange={(e) => handleShapeColorChange(e, selectedShapeIndex)}
            className="p-2 mb-4 w-full"
          />
          <input
            type="color"
            value={placedShapes[selectedShapeIndex].fontColor}
            onChange={(e) => handleFontColorChange(e, selectedShapeIndex)}
            className="p-2 mb-4 w-full"
          />
          <label className="block">Shape Size:</label>
          <input
            type="number"
            value={placedShapes[selectedShapeIndex].size}
            onChange={(e) => handleShapeSizeChange(e, selectedShapeIndex)}
            className="p-2 mb-4 w-full"
          />
          <label className="block">Font Size:</label>
          <input
            type="number"
            value={placedShapes[selectedShapeIndex].fontSize}
            onChange={(e) => handleFontSizeChange(e, selectedShapeIndex)}
            className="p-2 mb-4 w-full"
          />
        </div>
      )}
    </div>
  );
};

export default DraggableSideMenu;

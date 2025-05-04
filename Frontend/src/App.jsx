import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import { useState } from 'react'

export default function App() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleBackClick = () => {
    // Logic for the back button (could be navigation or closing the box)
    console.log("Back button clicked");
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Back Button positioned outside the Tldraw box, hidden in fullscreen mode */}
      {!isFullscreen && (
        <button 
          onClick={handleBackClick}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 10, // Ensure the back button stays on top
          }}
        >
          Back
        </button>
      )}

      {/* Fullscreen Toggle Button with icon, positioned at bottom-right */}
      <button 
        onClick={toggleFullscreen}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          padding: '10px 10px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10, // Ensure it's on top of the canvas
          fontSize: '18px',
        }}
      >
        {isFullscreen ? '↗️' : '🔲'} {/* Fullscreen icon */}
      </button>

      {/* Tldraw Box with dynamic fullscreen */}
      <div style={{
        position: isFullscreen ? 'fixed' : 'absolute', // Use fixed for fullscreen mode
        top: isFullscreen ? '0' : '100px',  // Fullscreen will use the full height, otherwise space for buttons
        left: isFullscreen ? '0' : '20px',  // Fullscreen will span the whole width, otherwise space for buttons
        right: isFullscreen ? '0' : '20px', // Fullscreen spans the full width
        bottom: isFullscreen ? '0' : '20px', // Fullscreen spans the full height
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: isFullscreen ? '0' : '8px', // Remove border radius in fullscreen mode for a cleaner look
        overflow: 'hidden',
        zIndex: 1, // Keeps the box below the back button
      }}>
        <Tldraw />
      </div>
    </div>
  )
}

import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
export default function App() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleBackClick = () => {
    console.log("Back button clicked");
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', backgroundColor: '#1E1E1E'}}>
      {!isFullscreen && (
       <Navbar/>
      )}

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
          zIndex: 10, 
          fontSize: '18px',
        }}
      >
        {isFullscreen ? '↗️' : '🔲'} 
      </button>

      <div style={{
        position: isFullscreen ? 'fixed' : 'absolute',
        top: isFullscreen ? '0' : '100px',
        left: isFullscreen ? '0' : '20px',
        right: isFullscreen ? '0' : '20px',
        bottom: isFullscreen ? '0' : '20px',
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: isFullscreen ? '0' : '8px',
        overflow: 'hidden',
        zIndex: 1,
      }}>
        <Tldraw />
      </div>
    </div>
  )
}

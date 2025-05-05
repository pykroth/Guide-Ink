import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import Characters from './Components/Characters';

function Characterboard() {
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-hidden">
          <Characters />
        </div>
      </div>
    </div>
  );
}

export default Characterboard;

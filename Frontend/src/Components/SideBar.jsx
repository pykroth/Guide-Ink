import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} h-screen bg-[#202020] text-white transition-all duration-300`}>
      
      <div className="flex items-center justify-between px-2 py-3 border-b border-gray-700">
        {isOpen && <span className="text-sm font-semibold px-2">Project Name</span>}
        <button onClick={() => setIsOpen(!isOpen)} className="text-sm px-2 focus:outline-none">
          {isOpen ? '<<' : '>>'}
        </button>
      </div>

     
      <nav className="px-3 py-2 text-sm space-y-2 bg-[202020]">
        {isOpen && (
          <>
            <div>
                <button className="cursor-pointer">Overview</button>
            </div>
            <div>
                <button className="cursor-pointer" onClick={() => navigate('/calendar')}>Calendar</button>
            </div>
            <hr/>
            <div className="mt-4">
                <button className="cursor-pointer" onClick={() => navigate('/artboard')}>Art Board</button>
            </div>
            <div>
                <button className="cursor-pointer" onClick={() => navigate('/storyboard')}>Story board</button>
            </div>
           
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;

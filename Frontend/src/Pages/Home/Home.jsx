import React from 'react';
import ProjectSlider from './Components/ProjectSlider';
import TaskCalendar from './Components/TaskCalendar';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar'; // make sure casing matches the filename

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Main layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="text-center text-sm mb-2">Projects</div>
          <ProjectSlider />

          <div className="text-center text-sm mt-4">Task List</div>
          <TaskCalendar />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react'
import ProjectSlider from './Components/ProjectSlider'
import TaskCalendar from './Components/TaskCalendar'
import Navbar from '../../Components/Navbar';
function Home() {
  return (
    
    <div>
      <Navbar/>
     <div className="bg-black min-h-screen text-white p-4">
      <p className="text-sm mb-2">{'>>'}</p>

      <div className="text-center text-sm mb-2">Projects</div>
      <ProjectSlider />

      <div className="text-center text-sm mt-4">Task List</div>
      <TaskCalendar />
      </div>
    </div>
  );
}
export default Home
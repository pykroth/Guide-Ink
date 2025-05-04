import React from 'react';

const tasks = [
  {
    title: 'Complete Project 1',
    date: '2025-05-04',
  },
  {
    title: 'Team Meeting',
    date: '2025-05-05',
  },
  {
    title: 'Submit Report',
    date: '2025-05-07',
  },
];

export default function TaskCalendar() {
  return (
    <div className="bg-black w-[90%] rounded-xl mx-auto mt-6 p-4 text-black">
      <h2 className="text-lg font-semibold mb-2">Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="bg-white p-2 rounded-md shadow">
            <p className="font-medium">{task.title}</p>
            <p className="text-sm text-gray-600">{task.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

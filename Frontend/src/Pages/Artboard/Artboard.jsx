import { useState, useEffect } from 'react';

import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar'; // make sure casing matches the filename
import axios from 'axios';


export default function Artboard() {
  const [boards, setBoards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  
  useEffect(() => {
    axios.get('http://localhost:3000/projects/urls/')
      .then(res => {
        setBoards(res.data || []);
        console.log(res)
      })
      .catch(err => {
        console.error('Error fetching boards: ', err);
      })
  }, []);



  const handleAddBoard = (e) => {
    e.preventDefault();
    if (!inputUrl) return;

    // Validate basic Pinterest board format
    const valid = inputUrl.match(/^https:\/\/(www\.)?pinterest\.com\/[^/]+\/[^/]+\/?$/);
    if (!valid) {
      alert('Please enter a valid Pinterest board URL.');
      return;
    }

    setBoards(prev => [...prev, inputUrl]);
    console.log(boards)

    axios.post('http://localhost:3000/projects/urls/', {url: inputUrl})
      .then(res => {
        console.log('Boards updated: ', res.data);
      })
      .catch(err => {
        console.error('Error posting boards: ', err);
      })

    setInputUrl('');
    setShowForm(false);
  };

  useEffect(() => {
    if (window.PinUtils) {
      window.PinUtils.build();
    }
  }, [boards]);

  return (
    <div className="bg-[#1E1E1E] min-h-screen">
      <Navbar />
      {/* Main layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-4 text-white">Pinterest Artboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {boards.map((url, idx) => (
              <a
                data-pin-do="embedBoard"
                data-pin-board-width={350}
                data-pin-scale-height={240}
                data-pin-scale-width={80}
                href={url}
                key={idx}
              ></a>
            ))}
          </div>

          <button
            className="w-12 h-12 bg-red-600 text-white text-2xl font-bold rounded-lg flex items-center justify-center hover:bg-red-700 transition"
            onClick={() => setShowForm(prev => !prev)}
          >
            +
          </button>

          {showForm && (
            <form
              onSubmit={handleAddBoard}
              className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2"
            >
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="Paste Pinterest board URL"
                required
                className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-md text-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Add Board
              </button>
            </form>
          )}
          <script
            type="text/javascript"
            async defer
            src="//assets.pinterest.com/js/pinit.js"
          ></script>
        </div>
      </div>

    </div>
  );
}

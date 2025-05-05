import React, { useState } from 'react'

function CharacterStoryModal({ onClose }) {
  const [text, setText] = useState('')

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg w-[600px]">
        <h2 className="text-2xl mb-4">Character Story / Notes</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-48 p-2 border rounded"
          placeholder="Enter story or notes here..."
        />
        <button className="mt-4 bg-black text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default CharacterStoryModal

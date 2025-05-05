import React, { useState } from 'react'

function CharacterLinksModal({ onClose }) {
  const [links, setLinks] = useState([''])
  
  const updateLink = (index, value) => {
    const newLinks = [...links]
    newLinks[index] = value
    setLinks(newLinks)
  }

  const addLink = () => {
    setLinks([...links, ''])
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg w-[600px]">
        <h2 className="text-2xl mb-4">Reference Links</h2>
        {links.map((link, i) => (
          <input
            key={i}
            value={link}
            onChange={(e) => updateLink(i, e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            placeholder={`Link ${i + 1}`}
          />
        ))}
        <button onClick={addLink} className="bg-gray-800 text-white px-3 py-1 rounded mt-2">
          + Add Link
        </button>
        <button className="ml-4 mt-2 bg-black text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default CharacterLinksModal

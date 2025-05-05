import React, { useState } from 'react'

function CharacterDesignModal({ onClose, setCharacterImage }) {
  const [image, setImage] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      const imageUrl = URL.createObjectURL(file)
      setImage(imageUrl)
      setCharacterImage(imageUrl)
    } else {
      alert('Please upload a PNG or JPEG file.')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black p-6 rounded-lg w-[600px]">
        <h2 className="text-2xl mb-4">Upload Character Design</h2>

        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleImageUpload}
          className="mb-4"
        />

        {image && (
          <img
            src={image}
            alt="Preview"
            className="max-h-64 mx-auto rounded-lg mt-4"
          />
        )}

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterDesignModal

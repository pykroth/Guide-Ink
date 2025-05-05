import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import CharacterDesignModal from './Components/CharacterDesignModal'
import CharacterLinksModal from './Components/CharacterLinksModal'
import CharacterStoryModal from './Components/CharacterStoryModal'

function Character() {
  const [openModal, setOpenModal] = useState(null)
  const [characterImage, setCharacterImage] = useState(null)

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Navbar />
      <div className="flex flex-1 h-full overflow-hidden">

        <Sidebar />
        <div className="flex-1 p-8 relative">
          <button
            className="absolute top-4 left-4 text-white text-3xl"
            onClick={() => window.history.back()}
          >
            ←
          </button>

          
          <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-12">
          
            <div
              className="relative bg-gray-300 text-black rounded-xl p-8 row-span-2 text-3xl font-semibold flex justify-center items-center cursor-pointer hover:scale-105 transition overflow-hidden"
              onClick={() => setOpenModal('design')}
            >
              {characterImage && (
                <img
                  src={characterImage}
                  alt="Character"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                />
              )}
              <span className="z-10">character design</span>
            </div>

            
            <div
              className="bg-gray-300 text-black rounded-xl p-8 text-3xl font-semibold flex justify-center items-center cursor-pointer hover:scale-105 transition"
              onClick={() => setOpenModal('story')}
            >
              character story/notes
            </div>

          
            <div
              className="bg-gray-300 text-black rounded-xl p-8 text-3xl font-semibold flex justify-center items-center cursor-pointer hover:scale-105 transition"
              onClick={() => setOpenModal('links')}
            >
              References / links to other pages
            </div>
          </div>

          
          {openModal === 'design' && (
            <CharacterDesignModal
              onClose={() => setOpenModal(null)}
              setCharacterImage={setCharacterImage}
            />
          )}
          {openModal === 'story' && (
            <CharacterStoryModal onClose={() => setOpenModal(null)} />
          )}
          {openModal === 'links' && (
            <CharacterLinksModal onClose={() => setOpenModal(null)} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Character

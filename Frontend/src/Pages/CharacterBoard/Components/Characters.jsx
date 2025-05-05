import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Characters() {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([
    { id: '1', name: 'Thanos', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ157r5ABnCE2q8ux_c_gNOcZmbw6cMValpQ&s' },
  ]);

  const handleCharacterClick = (id) => {
    navigate(`/character/${id}`);
  };

  const handleAddClick = () => {
    const newChar = {
      id: Date.now().toString(), 
      name: 'New Character',
      icon: '', 
    };
    setCharacters([...characters, newChar]);
  };

  return (
    <div className="p-6 h-full overflow-y-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {characters.map((char) => (
          <div
            key={char.id}
            onClick={() => handleCharacterClick(char.id)}
            className="relative bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 overflow-hidden h-40 flex items-end justify-center"
          >
            <img
              src={char.icon || '/assets/default-avatar.png'}
              alt={char.name}
              className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            />
            <span className="text-sm text-center z-10 p-2 bg-black/40 w-full">
              {char.name}
            </span>
          </div>
        ))}
        <div
          onClick={handleAddClick}
          className="bg-gray-800 rounded-lg cursor-pointer flex items-center justify-center text-4xl hover:bg-gray-700 h-40"
        >
          +
        </div>
      </div>
    </div>
  );
}

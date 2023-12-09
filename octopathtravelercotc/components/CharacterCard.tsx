// components/CharacterList.tsx
import React, { useState, useEffect } from 'react';

interface Character {
  id: number;
  name: string;
  image1: string;
  rarity: string;
  influence: string;
  job: string;
}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/characters');
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Character List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="border p-4 rounded-md mb-4">
            <div className="flex justify-center mb-4">
              <img
                src={character.image1}
                alt={character.name}
                className="max-w-full h-auto rounded-md"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{character.name}</h2>
            <p>Rarity: {character.rarity}</p>
            <p>Influence: {character.influence}</p>
            <p>Job: {character.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;


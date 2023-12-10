// components/CharacterList.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
        
        // Sort characters based on id
        const sortedCharacters = data.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
        
        setCharacters(sortedCharacters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sm:flex-col">
      <h2 className="text-3xl font-bold mb-4">Character List</h2>
      <div className="charList flex flex-wrap -mx-4">
        {characters.map((character) => (
          <Link key={character.id} href={`${character.id}`}>
              <div className="border p-4 rounded-md">
                <img
                  src={character.image1}
                  alt={character.name}
                  className="sprite max-w-full h-40 rounded-md object-cover"
                />
                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-2">{character.name}</h2>
                  <p>Rarity: {character.rarity}</p>
                  <p>Influence: {character.influence}</p>
                  <p>Job: {character.job}</p>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;








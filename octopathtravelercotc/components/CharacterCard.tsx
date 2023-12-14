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

interface CharacterListProps {
  displaySavedCharacters?: boolean;
}

const CharacterList: React.FC<CharacterListProps> = ({ displaySavedCharacters = false }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [savedIds, setSavedIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/characters');
        const data = await response.json();
        const sortedCharacters = data.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
        setCharacters(sortedCharacters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();

    const savedIdsString = localStorage.getItem('savedCharacterIds');
    const initialSavedIds = savedIdsString ? JSON.parse(savedIdsString) : [];
    setSavedIds(initialSavedIds);
  }, []);

  const handleSaveToLocalStorage = (id: number) => {
    if (!savedIds.includes(id)) {
      const updatedSavedIds = [...savedIds, id];
      localStorage.setItem('savedCharacterIds', JSON.stringify(updatedSavedIds));
      console.log(`Character with ID ${id} added to favorites.`);
      window.location.reload();
    } else {
      const updatedSavedIds = savedIds.filter((savedId: number) => savedId !== id);
      localStorage.setItem('savedCharacterIds', JSON.stringify(updatedSavedIds));
      console.log(`Character with ID ${id} removed from favorites.`);
      window.location.reload();
    }
  };

  const displayedCharacters = displaySavedCharacters
    ? characters.filter((character) => savedIds.includes(character.id))
    : characters;

  return (
    <div className="sm:flex-col">
      <div className="charList flex flex-wrap -mx-4">
        {displayedCharacters.map((character) => (
          <Link key={character.id} href={`/${character.id}`}>
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
                  <button
                    onClick={() => handleSaveToLocalStorage(character.id)}
                    style={{
                      marginTop: '8px',
                      padding: '8px',
                      borderRadius: '4px',
                      backgroundColor: savedIds.includes(character.id) ? 'red' : 'blue',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    {savedIds.includes(character.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
// pages/teams.tsx
import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import CharacterList from '../../components/CharacterCard'; 

const Teams = () => {
  const [savedCharacterIds, setSavedCharacterIds] = useState<number[]>([]);
  const [savedCharacters, setSavedCharacters] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve saved character IDs from local storage on component mount
    const savedIdsString = localStorage.getItem('savedCharacterIds');
    const initialSavedIds = savedIdsString ? JSON.parse(savedIdsString) : [];
    setSavedCharacterIds(initialSavedIds);

    // Fetch character data based on saved IDs
    const fetchSavedCharacters = async () => {
      try {
        const characterPromises = initialSavedIds.map(async (id: number) => {
          const response = await fetch(`/api/characters/${id}`);
          return response.json();
        });

        const characters = await Promise.all(characterPromises);
        setSavedCharacters(characters);
      } catch (error) {
        console.error('Error fetching saved characters:', error);
      }
    };

    fetchSavedCharacters();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Favorite Travelers</h1>
        <CharacterList displaySavedCharacters />
      </div>
    </div>
  );
};

export default Teams;


// pages/characters/[id].tsx
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";

const CharacterDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/characters/${id}`
        );
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <h1 className="text-center text-3xl font-bold">{character.name}</h1>
      <div className="border p-4 rounded-md mt-4 flex flex-col md:flex-row items-center md:items-start">
        {/* Bigger Art */}
        {character.image2 && (
          <div className="max-w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={character.image2}
              alt={`${character.name} Bigger Art`}
              className="w-full max-h-96 object-contain mt-4"
            />
          </div>
        )}
        {/* Character Image and Details */}
        <div className="max-w-full md:w-1/2 md:ml-4 border md:border-l-0 md:border-t md:border-t-0 md:pt-0 md:pl-4 text-center md:text-left">
          <img
            src={character.image1}
            alt={character.name}
            className="max-w-full h-40 rounded-md object-cover mb-4"
          />
          {/* Details and Stats Container */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start">
            {/* Details */}
            <div className="md:mr-4 text-center md:text-left">
              <h2 className="text-xl font-bold mb-2">Details</h2>
              <p>Rarity: {character.rarity}</p>
              <p>Influence: {character.influence}</p>
              <p>Job: {character.job}</p>
            </div>
            {/* Stats */}
            <div className="md:mr-4 text-center md:text-left">
              <h2 className="text-xl font-bold mb-2">Stats</h2>
              <p><strong>HP:</strong> {character.hp}</p>
              <p><strong>SP:</strong> {character.sp}</p>
              <p><strong>ATK:</strong> {character.atk}</p>
              <p><strong>DEF:</strong> {character.def}</p>
              <p><strong>MAG:</strong> {character.mag}</p>
              <p><strong>MDEF:</strong> {character.mdef}</p>
              <p><strong>Crit:</strong> {character.crit}</p>
              <p><strong>Speed:</strong> {character.speed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;









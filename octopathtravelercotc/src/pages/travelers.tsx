// pages/travelers.tsx
import React from 'react';
import NavBar from '../../components/NavBar';
import CharacterList from '../../components/CharacterCard';

const Travelers: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Travelers Page</h1>
        <CharacterList />
      </div>
    </div>
  );
};

export default Travelers;

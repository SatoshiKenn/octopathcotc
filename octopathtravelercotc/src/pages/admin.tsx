import React, { useState } from 'react';
import NavBar from '../../components/NavBar';

const Admin = () => {
  const [characterData, setCharacterData] = useState({
    name: '',
    image1: '',
    image2: '',
    hp: 0,
    sp: 0,
    atk: 0,
    def: 0,
    mag: 0,
    mdef: 0,
    crit: 0,
    speed: 0,
    influence: '',
    job: '',
    rarity: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //logic to send characterData to the server
    console.log('Character Data:', characterData);
  };

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Add New Character</h1>
        <main className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Character Details</h2>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={characterData.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Add Character
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Admin;

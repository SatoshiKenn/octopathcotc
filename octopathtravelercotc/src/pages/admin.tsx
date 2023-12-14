import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import useAddCharacterAdmin from "../hooks/useAddCharacterAdmin";
import Head from 'next/head';

const Admin = () => {
  const { onSubmit, characterData, handleInputChange, errorMessage } =
    useAddCharacterAdmin();

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Administration</title>
      </Head>
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Add New Character</h1>
        <main className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md">
          <form onSubmit={onSubmit} method="POST">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Character Details
            </h2>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
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

            <div className="mb-4">
              <label
                htmlFor="image1"
                className="block text-sm font-medium text-gray-700"
              >
                {'Image 1 (name.format)'}:
              </label>
              <input
                type="text"
                id="image1"
                name="image1"
                value={characterData.image1}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="image2"
                className="block text-sm font-medium text-gray-700"
              >
                {'Image 2 (name.format)'}
              </label>
              <input
                type="text"
                id="image2"
                name="image2"
                value={characterData.image2}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="hp"
                className="block text-sm font-medium text-gray-700"
              >
                HP:
              </label>
              <input
                type="number"
                id="hp"
                name="hp"
                value={characterData.hp}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="sp"
                className="block text-sm font-medium text-gray-700"
              >
                SP:
              </label>
              <input
                type="number"
                id="sp"
                name="sp"
                value={characterData.sp}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="atk"
                className="block text-sm font-medium text-gray-700"
              >
                Attack (ATK):
              </label>
              <input
                type="number"
                id="atk"
                name="atk"
                value={characterData.atk}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="def"
                className="block text-sm font-medium text-gray-700"
              >
                Defense (DEF):
              </label>
              <input
                type="number"
                id="def"
                name="def"
                value={characterData.def}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="mag"
                className="block text-sm font-medium text-gray-700"
              >
                Magic (MAG):
              </label>
              <input
                type="number"
                id="mag"
                name="mag"
                value={characterData.mag}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="mdef"
                className="block text-sm font-medium text-gray-700"
              >
                Magic Defense (MDEF):
              </label>
              <input
                type="number"
                id="mdef"
                name="mdef"
                value={characterData.mdef}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="crit"
                className="block text-sm font-medium text-gray-700"
              >
                Critical (CRIT):
              </label>
              <input
                type="number"
                id="crit"
                name="crit"
                value={characterData.crit}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="speed"
                className="block text-sm font-medium text-gray-700"
              >
                Speed:
              </label>
              <input
                type="number"
                id="speed"
                name="speed"
                value={characterData.speed}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="influence"
                className="block text-sm font-medium text-gray-700"
              >
                Influence:
              </label>
              <select
                id="influence"
                name="influence"
                value={characterData.influence}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="" disabled>
                  Select Influence
                </option>
                <option value="Wealth">Wealth</option>
                <option value="Power">Power</option>
                <option value="Fame">Fame</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="job"
                className="block text-sm font-medium text-gray-700"
              >
                Job:
              </label>
              <select
                id="job"
                name="job"
                value={characterData.job}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="" disabled>
                  Select Job
                </option>
                <option value="Apothecary">Apothecary</option>
                <option value="Cleric">Cleric</option>
                <option value="Dancer">Dancer</option>
                <option value="Hunter">Hunter</option>
                <option value="Merchant">Merchant</option>
                <option value="Scholar">Scholar</option>
                <option value="Thief">Thief</option>
                <option value="Warrior">Warrior</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="rarity"
                className="block text-sm font-medium text-gray-700"
              >
                Rarity:
              </label>
              <select
                id="rarity"
                name="rarity"
                value={characterData.rarity}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="" disabled>
                  Select Rarity
                </option>
                <option value="3 Stars">3 Stars</option>
                <option value="4 Stars">4 Stars</option>
                <option value="5 Stars">5 Stars</option>
              </select>
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


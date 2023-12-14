import { useRouter } from 'next/router';
import React, { useState } from 'react';
import fetcherChar from '@/pages/api/fetchChar';

const useAddCharacterAdmin = () => {
  const initialCharacterData = {
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
  };

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

  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (
      characterData.name.trim() === '' ||
      characterData.image1.trim() === '' ||
      characterData.hp <= 0 ||
      characterData.sp <= 0 ||
      characterData.atk <= 0 ||
      characterData.def <= 0 ||
      characterData.mag <= 0 ||
      characterData.mdef <= 0 ||
      characterData.crit <= 0 ||
      characterData.speed <= 0 ||
      characterData.influence.trim() === '' ||
      characterData.job.trim() === '' ||
      characterData.rarity.trim() === ''
    ) {
      setErrorMessage('All fields are required!');
      return;
    }

    const postData = { ...characterData };
    
    const postCharacter = await fetcherChar('/api/addCharacter', {
      method: 'POST',
      body: JSON.stringify(postData),
    });

    if (!postCharacter.ok) {
      const errorData = await postCharacter.json();
      setErrorMessage(`Error: ${errorData.message}`);
      return;
    }
    
    setCharacterData(initialCharacterData);
    await router.push('/admin');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCharacterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    onSubmit,
    characterData,
    handleInputChange,
    errorMessage,
  };
};

export default useAddCharacterAdmin;

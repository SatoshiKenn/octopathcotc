import { useRouter } from 'next/router';

import React, { useState } from 'react';

import fetcher from '@/pages/api/fetch';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('all fields are required!');
      return
    }

    const data = {
      email,
      password,
    }

    const postSignup = await fetcher('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!postSignup.ok) {
      const errorMessage = await postSignup.json()
      setErrorMessage(`something wen wrong error code: ${postSignup.status}, message: ${errorMessage.message}`)
      return
    }

    await router.push('/admin')
  }

  return {
    onSubmit,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
  }
}

export default useLogin;

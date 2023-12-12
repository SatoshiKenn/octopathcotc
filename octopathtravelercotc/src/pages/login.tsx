import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import useLogin from "@/hooks/useLogin";

const Login = () => {
  const {
    onSubmit,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
  } = useLogin();

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        <main className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md">
          <form onSubmit={onSubmit} method="POST">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Log in</h2>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}

            <div>
              <p>{`Don't have an account? Please contact an Admin`}</p>
            </div>

            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Login
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;


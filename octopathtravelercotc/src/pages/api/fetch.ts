export const fetcher = async (path: string, options?: RequestInit): Promise<Response> => {
  const requestOptions: RequestInit = {
    ...options,
    headers: {
      ...(options?.headers || {}),
    },
  };

  return fetch(path, requestOptions);
};

export default fetcher;

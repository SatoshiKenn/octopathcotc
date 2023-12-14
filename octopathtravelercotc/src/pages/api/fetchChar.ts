export const fetcherChar = async (path: string, options?: RequestInit): Promise<Response> => {
    const requestOptions: RequestInit = {
      ...options,
      headers: {
        ...(options?.headers || {
          'content-type': 'application/json'
        }),
      },
    };
    return fetch(path, requestOptions);
  };
  
  export default fetcherChar;
export const fetcherChar = async (path: string, options?: RequestInit): Promise<Response> => {
    console.log("entra a fetch");
    const requestOptions: RequestInit = {
      ...options,
      headers: {
        ...(options?.headers || {
          'content-type': 'application/json'
        }),
      },
    };
  
    console.log("Sale de fetch");
    return fetch(path, requestOptions);
  };
  
  export default fetcherChar;
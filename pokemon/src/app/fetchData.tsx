/*async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}*/


async function fetchData(url: string): Promise<object> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      id: data.id,
      name: data.name
    }
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }

}


export default fetchData
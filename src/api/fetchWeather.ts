const API_KEY = `a8d65f2e7067dcdaac3e0369dcf057e1`;
export const getWeatherByCoords = async (
  LAT: number,
  LON: number
): Promise<any> => {
  const API_COORS = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

  const response = await fetch(API_COORS);
  const data = await response.json();
  return data;
};

//TODO: Buscar por ciudad
export const getWeatherBySearch = async (CITY: string): Promise<any> => {
  const API_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;
  const response = await fetch(API_CITY);
  const data = await response.json();
  return data;
};

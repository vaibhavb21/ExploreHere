import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-Rapidapi-key': REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-Rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-Rapidapi-key': REACT_APP_RAPID_API_WEATHER_API_KEY,
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
          ,
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
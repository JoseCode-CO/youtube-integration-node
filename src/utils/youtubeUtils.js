// youtubeUtils.js
import axios from 'axios';

// Función para realizar la solicitud a la API de YouTube
export const searchYouTube = async (search) => {
  try {
    const response = await axios.get(process.env.YOUTUBE_API_BASE_URL, {
      params: {
        part: 'snippet',
        q: search,
        maxResults: 10,
        key: process.env.YOUTUBE_API_KEY
      }
    });

    return response.data.items;
  } catch (error) {
    console.error('Error al obtener datos de YouTube:', error);
    throw new Error('Error al obtener datos de YouTube');
  }
};

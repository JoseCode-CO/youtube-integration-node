// youtubeUtils.js
import axios from 'axios';
import { handleAPIError } from '../helpers/errors.js';

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

    // Comprobar si la respuesta contiene datos válidos
    if (response.data && response.data.items && Array.isArray(response.data.items)) {
      return response.data.items;
    } else {
      throw new Error('Respuesta inválida de la API de YouTube');
    }
  } catch (error) {
    // Llamar a la función handleAPIError para manejar los errores
    handleAPIError(error);
  }
};

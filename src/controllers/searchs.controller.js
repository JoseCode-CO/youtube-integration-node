// index.js
import dotenv from 'dotenv';
import { searchYouTube } from '../utils/youtubeUtils.js';
import { handleAPIError } from '../helpers/errors.js';
import { formatYouTubeData } from '../utils/formatYouTubeData.js';
dotenv.config();

export const getData = async (req, res) => {
  const { search } = req.query;

  try {
    // Utilizar la función searchYouTube desde youtubeUtils.js para obtener los datos
    const items = await searchYouTube(search);

    // Formatear los datos obtenidos usando la función de utilidad formatYouTubeData
    const videos = formatYouTubeData(items);

    res.status(200).json(videos);
  } catch (error) {
    // Llamar a la función handleAPIError para manejar los errores
    try {
      handleAPIError(error);
    } catch (error) {
      // Enviar el mensaje de error en la respuesta HTTP
      res.status(500).json({ error: error.message });
    }
  }
};

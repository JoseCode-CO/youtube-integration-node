// index.js
import dotenv from 'dotenv';
import { searchYouTube } from '../utils/youtubeUtils.js';

dotenv.config();

export const getData = async (req, res) => {
  const { search } = req.query;

  try {
    // Utilizar la función searchYouTube desde youtubeUtils.js para obtener los datos
    const items = await searchYouTube(search);

    // Procesar los datos obtenidos para devolver la respuesta requerida
    const videos = items.map((item) => ({
      published_at: item.snippet.publishedAt,
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.default.url,
      extra: { something: 'extra' }
    }));

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

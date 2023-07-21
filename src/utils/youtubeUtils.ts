import axios from 'axios';
import env  from '../utils/env';
export const searchYouTube = async (search:string) => {

  try {
    const response = await axios.get(env.YOUTUBE_API_BASE_URL, {
      params: {
        part: 'snippet',
        q: search,
        maxResults: 10,
        key: process.env.YOUTUBE_API_KEY
      }
    });

 
    if (response.data && response.data.items && Array.isArray(response.data.items)) {
      return response.data.items;
    } else {
      throw new Error('Invalid YouTube API response');
    }
  } catch (error) {
    console.log(error)
  }
};

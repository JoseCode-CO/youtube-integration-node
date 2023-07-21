import { Response, Request } from "express";
import { searchYouTube } from '../utils/youtubeUtils';
import { formatYouTubeData } from '../utils/formatYouTubeData';

export const getData = async (req: Request, res: Response) => {
  const { search } = req.query;
  try {
    const items = await searchYouTube(search as string);
    const videos = formatYouTubeData(items);
    res.status(200).json(videos);

  } catch (error) {

    res.status(500).json({ error });
  }
};

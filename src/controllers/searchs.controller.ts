import { Response, Request } from "express";
import { searchYouTube } from '../utils/youtubeUtils';
import { formatYouTubeData } from '../utils/formatYouTubeData';

export const getData = async (req: Request, res: Response) => {
  const { search } = req.query;
  try {
    const items = await searchYouTube(search as string);

    const responseMessage = items.length === 0 ? "Video not found." : formatYouTubeData(items);
    res.status(200).json(responseMessage);

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" });
  }
};

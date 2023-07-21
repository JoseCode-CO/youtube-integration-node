import { formatData } from "../typescript/interfaces/all.interface";
import { objectStructure } from "../typescript/interfaces/all.interface";


export const formatYouTubeData = (items: objectStructure[]): formatData[] => {
    return items.map((item) => ({
        published_at: item.snippet.publishedAt,
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url,
        extra:  item.snippet.channelTitle
    }));
};

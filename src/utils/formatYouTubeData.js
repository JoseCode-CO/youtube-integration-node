export const formatYouTubeData = (items) => {
    return items.map((item) => ({
        published_at: item.snippet.publishedAt,
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url,
        extra: { something: 'extra' }
    }));
};
export interface formatData {
    published_at: string; 
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    extra: string;
}

export interface objectStructure {
    snippet: {
        publishedAt: string;
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
            };
        };
        channelTitle: string;
    };
    id: {
        videoId: string;
    };
}
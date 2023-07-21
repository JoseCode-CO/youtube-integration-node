import dotenv from 'dotenv';
dotenv.config();
export default {
    YOUTUBE_API_BASE_URL:process.env.YOUTUBE_API_BASE_URL || '' 
}


import env from "react-dotenv";
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJskGeByzRRSvmOyZOz61ig&maxResults=50&type=video&key=" + env.REACT_APP_GOOGLE_API_KEY;


const API_KEY = 'AIzaSyCt1iRu4NJMFeHjh3F9F2IKrUcg-6lxrb8';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const searchVideos = async (query: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search?part=snippet&maxResults=12&q=${query}&type=video&key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data;
  } catch (error) {
    console.error('YouTube API Error:', error);
    throw error;
  }
}
import React, { useState } from 'react';
import { Youtube, Heart } from 'lucide-react';
import { Video } from './types';
import { searchVideos } from './api';
import SearchBar from './components/SearchBar';
import VideoCard from './components/VideoCard';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await searchVideos(query);
      setVideos(response.items);
      setSelectedVideo(null);
    } catch (error) {
      console.error('Error searching videos:', error);
      setError('Failed to load videos. Please try again.');
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Youtube className="w-7 h-7 md:w-8 md:h-8 text-blue-100 animate-pulse" />
              <span className="text-xl md:text-2xl font-bold text-white">
                SD
              </span>
            </div>
            <div className="w-full md:w-auto flex-1">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {error && (
          <div className="text-blue-700 text-center mb-4 bg-blue-50 rounded-lg p-3 md:p-4 border border-blue-200">
            {error}
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-4 border-blue-400 border-t-transparent"></div>
          </div>
        ) : videos.length > 0 ? (
          selectedVideo ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-2">
                <VideoPlayer video={selectedVideo} />
              </div>
              <div className="space-y-4">
                <h2 className="text-lg md:text-xl font-semibold text-blue-700">Related Videos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {videos.map((video) => (
                    <VideoCard
                      key={video.id.videoId}
                      video={video}
                      onSelect={setSelectedVideo}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {videos.map((video) => (
                <VideoCard
                  key={video.id.videoId}
                  video={video}
                  onSelect={setSelectedVideo}
                />
              ))}
            </div>
          )
        ) : (
          <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
            <Heart className="w-16 h-16 text-blue-400 animate-pulse mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              Find Your Favorite Videos
            </h2>
            <p className="text-blue-600 text-lg md:text-xl max-w-md mx-auto">
              Search and discover the videos you love. Start by typing in the search bar above!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
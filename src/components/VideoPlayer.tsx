import React from 'react';
import { Video } from '../types';

interface VideoPlayerProps {
  video: Video;
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  return (
    <div className="w-full bg-white rounded-xl p-3 md:p-4 shadow-md border border-blue-100">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900">
          {video.snippet.title}
        </h1>
        <p className="mt-2 text-blue-600 text-sm md:text-base">
          {video.snippet.channelTitle}
        </p>
        <p className="mt-4 text-blue-700 whitespace-pre-line text-sm md:text-base">
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
}
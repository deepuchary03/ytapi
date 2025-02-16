import React from 'react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onSelect: (video: Video) => void;
}

export default function VideoCard({ video, onSelect }: VideoCardProps) {
  return (
    <div
      className="cursor-pointer group bg-white rounded-xl overflow-hidden transition-all duration-200 hover:scale-102 hover:shadow-lg hover:shadow-blue-200/50 border border-blue-100"
      onClick={() => onSelect(video)}
    >
      <div className="relative">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-3 md:p-4">
        <h3 className="font-semibold text-blue-900 line-clamp-2 text-sm md:text-base group-hover:text-blue-600 transition-colors">
          {video.snippet.title}
        </h3>
        <p className="text-xs md:text-sm text-blue-600 mt-1">
          {video.snippet.channelTitle}
        </p>
        <p className="text-xs text-blue-400 mt-1">
          {new Date(video.snippet.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
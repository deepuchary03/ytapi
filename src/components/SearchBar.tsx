import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search your favorite videos..."
        className="flex-1 px-3 md:px-4 py-2 bg-white/90 border border-blue-200 text-blue-900 placeholder-blue-400 rounded-l-lg focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 text-sm md:text-base"
      />
      <button
        type="submit"
        className="px-4 md:px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-r-lg hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-100 transition-colors duration-200"
      >
        <Search className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </form>
  );
}
import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { Search } from 'lucide-react'; // optional icon

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      fetchWeather(input.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-full bg-white border border-blue-200 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400 transition"
    >
      <input
        type="text"
        placeholder="Search for a city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-full transition font-medium"
      >
        <div className="flex items-center gap-1">
          <Search size={16} />
          <span>Search</span>
        </div>
      </button>
    </form>
  );
};

export default SearchBar;

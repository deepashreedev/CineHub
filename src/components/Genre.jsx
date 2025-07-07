import React from 'react';

const Genre = ({ genreList, setSelectedGenre }) => {
  return (
    <select
      className='p-2 bg-zinc-900 bg-opacity-85 backdrop:blur-md text-white border rounded-xl'
      onChange={(e) => setSelectedGenre(e.target.value)}
    >
      <option value="">All Genres</option>
      {genreList.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default Genre;

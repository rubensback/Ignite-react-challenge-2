import React from 'react'
import { MovieCard } from './MovieCard';


interface Ratings {
  Value: string;
}

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: Ratings[]
}

interface ContentProps {
  selectedGenre: {
    id: number;
    name: string;
    title: string;
  };
  movies: Movie[]
}

export const Content:React.FC<ContentProps> = ({selectedGenre, movies}) => {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>

  )
}
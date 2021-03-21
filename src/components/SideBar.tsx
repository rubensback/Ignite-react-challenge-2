import React, {Dispatch} from 'react'

import {Button} from './Button'

interface Genre {
  id: number;
  title: string;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
}

interface SideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  setSelectedGenreId: Dispatch<React.SetStateAction<number>>
}

export const SideBar: React.FC<SideBarProps> = ({ genres, selectedGenreId, setSelectedGenreId}) => {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}
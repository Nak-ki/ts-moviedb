import {FC} from 'react';
import {Stack} from "@mui/material";

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview";
import {BadgeGenre} from "../GenresContainer";
import css from './MovieInfo.module.css'



interface IProps {
    info:IMovie

}

const MovieInfo :FC<IProps> = ({info}) => {
    const {poster_path,title,original_title,release_date, original_language, overview,genres } = info



 return (
  <div className={css.Main}>
      <div className={css.Poster}>
         <PosterPreview poster_path={poster_path}/>
      </div>
      <div className={css.Info}>
          <h1>{title}</h1>
          <h3><b>Original title:</b> {original_title}</h3>
          <div className={css.Badgee}>
              <Stack direction={'row'} spacing={10} >
                  {genres.map(genre => <BadgeGenre  genre={genre} key={genre.id}/>)}
              </Stack>
          </div>
          <p><b>Release date:</b> {release_date}</p>
          <p><b>Original language:</b> {original_language}</p>
          <article><b>Overview:</b> {overview}</article>
      </div>
  </div>
 );
};

export {MovieInfo};
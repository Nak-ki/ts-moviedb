import {FC, useEffect, useState} from 'react';
import {IGenre} from "../../../interfaces";
import {genreService} from "../../../services";
import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'

interface IProps {

}

const Genres :FC<IProps> = () => {

    const [genresRes, setGenresRes] = useState<{genres:IGenre[]}>({genres:[]})

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenresRes(data))
    }, []);
    console.log(genresRes)

 return (
  <div className={css.Genres}>
      {genresRes.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
  </div>
 );
};

export {Genres};
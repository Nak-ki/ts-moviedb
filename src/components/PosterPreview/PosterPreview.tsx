import {FC} from 'react';
import css from './PosterPath.module.css'

interface IProps {
    poster_path:string

}

const PosterPreview :FC<IProps> = ({poster_path}) => {
 return (
  <div className={css.PosterPath}>
   <img src={`https://Image.tmdb.org/t/p/w500${poster_path}`} alt='poster'/>
  </div>
 );
};

export {PosterPreview};
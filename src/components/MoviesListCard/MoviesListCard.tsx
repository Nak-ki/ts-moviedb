import {FC} from 'react';
import Badge from "@mui/material/Badge";
import {Rating} from "@mui/material";

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview";
import {useNavigate} from "react-router-dom";
import css from './MoviesListCard.module.css'


interface IProps {
    movie:IMovie
}

const MoviesListCard :FC<IProps> = ({movie}) => {
    const {id, poster_path, title, original_title, vote_average, release_date} = movie
    const navigate = useNavigate()

    const click : () => void = () => {
        navigate(`/overview/${id}`)
    }

 return (
     <div onClick={click} className={css.MovieCard}>
         <Badge className={css.Badge} badgeContent={vote_average} color={'secondary'}><PosterPreview poster_path={poster_path}/></Badge>
         <Rating max={10} defaultValue={vote_average} color={'#ffd700'} size={'large'} />
         <h2>{title} / {original_title}</h2>
         <h3>{release_date}</h3>

     </div>
 );
};

export {MoviesListCard};
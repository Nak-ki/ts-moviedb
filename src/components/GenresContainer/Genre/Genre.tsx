import {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import {useAppContext} from "../../../hooks";
import  css from './Genre.module.css'
interface IProps {
 genre:IGenre
}

const Genre :FC<IProps> = ({genre}) => {
    const {setWithGenres} = useAppContext()
    const {id, name} = genre
console.log(genre)

    const navigate = useNavigate()

    const click:() => void = () => {
        setWithGenres(id)
    }

 return (
     <div className={css.Genre}>
         <NavLink to={`/movies?${name}`} onClick={click}>{name}</NavLink>
     </div>
 );
};

export {Genre};
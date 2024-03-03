import {FC} from 'react';
import {NavLink} from "react-router-dom";
import Badge from "@mui/material/Badge";

import {IGenre} from "../../../interfaces";
import {useAppContext} from "../../../hooks";


interface IProps {
  genre:IGenre
}

const BadgeGenre :FC<IProps> = ({genre}) => {
 const { id,name} = genre
 const {setWithGenres} = useAppContext()


 const click:() => void = () => {
  setWithGenres(id)
 }



 return (
  <div>
      <Badge overlap={"circular"} color={"secondary"} badgeContent={
          <NavLink to={`/movies?${name}`} onClick={click}>{name}</NavLink>}>
      </Badge>
  </div>
 );
};

export {BadgeGenre};
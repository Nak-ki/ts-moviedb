import {FC, useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'
import {SearchForm} from "../SearchForm";
import {Context1} from "../../hoc/ContextProvider";
import {useAppContext} from "../../hooks";
import {FormControlLabel, Switch} from "@mui/material";
import {UserInfo} from "../UserInfo";

interface IProps {

}

const Header :FC<IProps> = () => {
    const [trigger, setTrigger] = useState<boolean>(true)
    const {setSearchWord} = useContext(Context1)
    const {setWithGenres} = useAppContext()


    const trig:() => void = ()=> {
        setTrigger(prevState => !prevState)
    }
    const searchW:() => void = () => {
        setSearchWord(null)
        setWithGenres(null)
    }

    const [switcher, setSwitcher] = useState<boolean>(false);

    const handleChange: () => void = () => {
        setSwitcher(prevState => !prevState);
        if(!switcher) {
            document.body.classList.add('dark')
        }
        else {
            document.body.classList.remove('dark')
        }
    };
 return (
     <div className={css.Header}>
         <div className={css.MovieDb}>MovieDB</div>
         <div className={css.Links}>
             <NavLink to={'movies'} onClick={searchW}>Movies</NavLink>
             <NavLink to={'genres'}>Genres</NavLink>
             <NavLink to={'#'} onClick={trig}>Search</NavLink>
         </div>
         <div>
             {!trigger && <SearchForm/>}
         </div>
         <div className={css.Switchr}>
             <FormControlLabel
                 control={<Switch onChange={handleChange}/>}
                 label="Dark mode"/>
         </div>
         <div>
             <UserInfo/>
         </div>
     </div>
 );
};

export {Header};
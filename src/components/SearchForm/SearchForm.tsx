import {FC, useContext} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Context1} from "../../hoc/ContextProvider";
import {useNavigate} from "react-router-dom";
import css from './SearchForm.module.css'

interface IProps {

}

const SearchForm :FC<IProps> = () => {
   const {register, handleSubmit, reset} = useForm<{search:string}>()
    const {setSearchWord} = useContext(Context1)
    const navigate = useNavigate()
    const submit:SubmitHandler<{search:string}> = (query) => {
       setSearchWord(query.search)
        navigate('/movies')
        reset()
    }

 return (
  <form className={css.SForm} onSubmit={handleSubmit(submit)}>
   <input type={'text'} placeholder={'The Godfather etc.'} {...register('search')}/>
      <button>Search</button>
  </form>
 );
};

export {SearchForm};
import {FC, useContext, useEffect, useState} from 'react';
import {movieService} from "../../services";
import {IMovie} from "../../interfaces";
import {MoviesListCard} from "../MoviesListCard";
import {usePageQuery} from "../../hooks";
import {useAppContext} from "../../hooks";
import {Context1} from "../../hoc/ContextProvider";
import css from './MovieList.module.css';

interface IProps {

}

const MovieList :FC<IProps> = () => {
    const [movie, setMovie] = useState<{page:number, results:IMovie[], total_pages:number}>({page:null, results:[], total_pages:null})
    const {page, prevPage, nextPage}: {page: string, prevPage:()=>void, nextPage:()=>void} = usePageQuery()
    const {with_genres} = useAppContext()
    const  {searchWord} = useContext(Context1)

    if (movie.total_pages >= 500){
        movie.total_pages = 500
    }

    useEffect(() => {
        if (with_genres){
            movieService.getByGenre(page, with_genres.toString()).then(({data}) => setMovie(data))
        }
        else if (searchWord){
            movieService.getByWord(searchWord, page).then(({data}) => setMovie(data))
        }
        movieService.getAll(page).then(({data}) => setMovie(data))

    }, [page, with_genres, searchWord]);


 return (
     <div>
         <div className={css.MovieList}>
             {movie.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
         </div>
         <div className={css.PageButtons}>
          <button disabled={page <= '1'} onClick={prevPage}>Previous Page</button>
          <button disabled={+page >= movie.total_pages} onClick={nextPage}>Next Page</button>
         </div>
     </div>
 );
}


export {MovieList};
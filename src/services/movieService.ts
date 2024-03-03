import {urls} from "../constants";
import {apiService} from "./apiService";
import {IRes} from "../types";
import {IMovie} from "../interfaces";



const movieService ={
    getAll: (page='1'): IRes<{ page:number, results:IMovie[], total_pages:number}> =>  apiService.get(urls.movieList.base, {params:{page}}),
    getById: (id:number): IRes<IMovie> => apiService.get(urls.movieList.byId(id)),
    getByGenre: (page: string, with_genres: string): IRes<{ page:number, results:IMovie[], total_pages:number }> => apiService.get(urls.movieList.base, {params: {page, with_genres}}),
    getByWord: (query:string, page:string): IRes<{ page:number, results:IMovie[], total_pages:number}> => apiService.get(urls.movieList.searchByWord, {params: {query, page}})
}

export {
    movieService
}
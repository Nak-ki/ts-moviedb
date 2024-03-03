import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IGenre} from "../interfaces";

const genreService = {
    getAll: (): IRes<{genres:IGenre[]}> => apiService.get(urls.genre.base)
}


export {
    genreService
}
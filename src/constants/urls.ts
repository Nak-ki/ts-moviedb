
const baseURL = 'https://api.themoviedb.org/3';

const movieList ='/movie'
const search = '/search'
const genre = '/genre'

const urls = {
    movieList:
        {
            base: `/discover${movieList}`,
            byId:(id:number):string => `${movieList}/${id}`,
            searchByWord: `${search}${movieList}`
        },
    genre:
        {
            base: `${genre}${movieList}/list`,
        }
}

export {
    baseURL,
    urls
}
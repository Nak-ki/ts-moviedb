import {MovieInfo} from "../components/MovieInfo";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMovie} from "../interfaces";
import {movieService} from "../services";

const MovieInfoPage = () => {
    const {id} = useParams()
    const [info, setInfo] = useState<IMovie>(null)


    useEffect(() => {
        movieService.getById(+id).then(({data}) => setInfo(data))

    }, [id]);

    return (
        <div>
            {info &&  <MovieInfo info={info}/>}
        </div>
    );
};

export {MovieInfoPage};

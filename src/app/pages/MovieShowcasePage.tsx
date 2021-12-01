import {useEffect, useState} from "react";
import {Movie} from "../utils/types";
import {wlAPI} from "../utils/wl_api";
import {Loader} from "../components/Loader";
import {useParams} from "react-router-dom";

export const MovieShowcasePage = () => {
    const [movie, setMovie] = useState<Movie>();
    const params = useParams();
    useEffect(() => {
        wlAPI.movie(parseInt(params.id ?? "-1")).then(res => setMovie(res.data))
    })
    return movie ? <p>{JSON.stringify(movie)}</p> : <Loader/>
}
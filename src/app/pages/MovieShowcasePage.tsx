import {useEffect, useState} from "react";
import {Movie} from "../utils/types";
import {wlAPI} from "../utils/wl_api";
import {Loader} from "../components/Loader";
import {useParams} from "react-router-dom";
import "./MovieShowcasePage.scss";
import plusIcon from "../assets/Plus.svg";
import {Button} from "../components/Button";

export const MovieShowcasePage = () => {
    const [movie, setMovie] = useState<Movie>();
    const params = useParams();
    useEffect(() => {
        wlAPI.movie(parseInt(params.id ?? "-1")).then(res => setMovie(res.data))
    })
    return movie ? <div className="showcase">
        <img className="cover" src={movie.thumbnail_url} alt={movie.title} />
        <div className="description">
            <h1>{movie.title}</h1>
            <h6>{movie.date}</h6>
            <h5>{movie.rating}</h5>
            <Button id="watchlist" text="Буду смотреть" toggled={true} image={plusIcon}/>
            <p>{movie.description}</p>
            <b>{movie.genres.join(", ")}</b>
        </div>
    </div> : <Loader/>
}
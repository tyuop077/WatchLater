import "./CollectionPage.scss";
import {useEffect, useState} from "react";
import {Movie} from "../utils/types";
import {wlAPI} from "../utils/wl_api";
import {Loader} from "../components/Loader";

export const CollectionPage = () => {
    const [collection, setCollection] = useState<Movie[]>();
    useEffect(() => {
        wlAPI.collections().then(res => setCollection(res.data))
    }, [])
    if (collection) return <>
        <h1>Коллекция</h1>
        <div className="collectionTable">
            {collection.map(movie =>
                <div className="collectionMovie">
                    <div className="banner">
                        <p>{movie.rating}</p>
                        <img src={movie.thumbnail_url} alt={movie.title}/>
                    </div>
                    <p>{movie.title}</p>
                </div>
            )}
        </div>
    </>; else return <Loader />
}
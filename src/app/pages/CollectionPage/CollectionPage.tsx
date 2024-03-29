import "./CollectionPage.scss";
import {useEffect, useState} from "react";
import {Movie} from "./Movie";
import {API} from "../../services/API";
import {Loader} from "../../components/Loader/Loader";
import {Link} from "react-router-dom";

export const CollectionPage = () => {
    const [collection, setCollection] = useState<Movie[]>();
    useEffect(() => {
        API.collections().then(res => setCollection(res.data))
    }, [])
    if (collection) return <>
        <h1>Коллекция</h1>
        <div className="collectionTable">
            {collection.map(movie =>
                <div className="collectionMovie">
                    <Link className="banner" to={`/movies/${movie.id}`}>
                        <p>{movie.rating}</p>
                        <img src={movie.thumbnail_url} alt={movie.title} />
                    </Link>
                    <p>{movie.title}</p>
                </div>
            )}
        </div>
    </>; else return <Loader />
}
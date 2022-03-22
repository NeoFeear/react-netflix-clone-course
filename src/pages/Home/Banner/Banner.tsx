import React, { useEffect, useState } from "react";
import { apiRequests } from "../../../redux/reducers/movies.reducer";
import axios from "../../Requests/axios";
import "./Banner.css";

interface bannerProps {
    title: string;
}

function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function Banner() {
    const [movie, setMovie]: any = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(apiRequests.reqNetflixOriginals);

            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);

            return request;
        }

        fetchData();

    }, []);

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundPosition: "center top"
        }}>

            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.original_title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <p className="banner__description">{truncate(movie?.overview, 150)}</p>
            </div>

            <div className="banner__fadeBottom" />

        </header>
    );
};

export default Banner;
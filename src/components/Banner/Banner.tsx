import React, { useEffect, useState } from "react";
import { apiRequests } from "../../redux/reducers/categories.reducer";
import axios from "../../redux/axios";
import "./Banner.css";

interface bannerProps {
    title: string;
}

function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function Banner() {
    const [banner, setBanner]: any = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(apiRequests.reqNetflixOriginals);

            setBanner(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);

            return request;
        }

        fetchData();

    }, []);

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${banner.backdrop_path})`,
            backgroundPosition: "center top"
        }}>

            <div className="banner__contents">
                <h1 className="banner__title">
                    {banner?.title || banner?.original_title || banner?.name || banner?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <p className="banner__description">{truncate(banner?.overview, 150)}</p>
            </div>

            <div className="banner__fadeBottom" />

        </header>
    );
};

export default Banner;
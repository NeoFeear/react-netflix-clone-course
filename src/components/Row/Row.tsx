import React, { useEffect, useState } from "react";
import axios from "../../pages/Requests/axios";
import "./Row.css";

interface RowProps {
    title: string;
    data: any[];
}

function Row({ title, data }: RowProps) {
    return(
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {data.map((movie: any) => (
                    <img className="row__poster"
                         key={movie.id}
                         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         alt={movie?.title || movie?.original_title || movie?.name || movie?.original_name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
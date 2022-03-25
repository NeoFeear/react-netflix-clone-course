import { Modal } from "@mui/material";
import React, { useState } from "react";
import Poster from "../Poster/Poster";
import "./Row.css";
interface RowProps {
    title: string;
    data: any[];
}

function Row({ title, data }: RowProps) {

    return (
        <>
            <div className="row">
                <h2>{title}</h2>

                <div className="row__posters">
                    {data.map((element: any) => (
                        <Poster element={element} key={element.id} />
                    ))}
                </div>
            </div>


        </>
    );

}

export default Row;
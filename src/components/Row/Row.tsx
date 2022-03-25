import { Modal } from "@mui/material";
import React, { useState } from "react";
import "./Row.css";
interface RowProps {
    title: string;
    data: any[];
}

function Row({ title, data }: RowProps) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function showDetails(element: any) {
        console.log(element);
    }

    return (
        <>
            <div className="row">
                <h2>{title}</h2>

                <div className="row__posters">
                    {data.map((element: any) => (
                        <img className="row__poster"
                            key={element.id}
                            src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                            alt={element?.title || element?.original_title || element?.name || element?.original_name}
                            onClick={() => {
                                handleOpen();
                            }}
                        />
                    ))}
                </div>
            </div>

            <Modal open={open} onClose={handleClose}>
                <div className="modal">
                    <h1>TEST</h1>
                </div>
            </Modal>
        </>
    );

}

export default Row;
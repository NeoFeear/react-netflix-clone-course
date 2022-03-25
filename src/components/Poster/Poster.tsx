import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './Poster.css';

interface PosterProps {
    element: any;
}

const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxWidth: '90%',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    backgroundColor: 'paper',
};

function Poster({ element }: PosterProps) {

    const [elementId, setElementId] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let myList = localStorage.getItem('myList');

    useEffect(() => {
        if (myList) {
            let list = JSON.parse(myList);
            let finded = false;

            list.forEach((item: any) => {
                if (item.id === element.id) {
                    finded = true;
                }
            });

            if (finded) {
                setElementId(element?.id);
            }
        }
    }, []);

    function addToMyList() {
        setElementId(element?.id);

        let IDs = [];

        if (myList !== null) {
            IDs = JSON.parse(myList);
        }

        IDs.push(element);

        localStorage.setItem('myList', JSON.stringify(IDs));
        console.log(`Add [${element?.title || element?.original_title || element?.name || element?.original_name}] to my list`);
    }

    function removeFromMyList() {
        setElementId(null);

        let IDs = [];

        if (myList !== null) {
            IDs = JSON.parse(myList);
        }

        IDs = IDs.filter((item: any) => item.id !== element.id);

        localStorage.setItem('myList', JSON.stringify(IDs));
        console.log(`Remove [${element?.title || element?.original_title || element?.name || element?.original_name}] from my list`);
    }

    return (
        <>
            <img className="row__poster"
                key={element.id}
                src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                alt={element?.title || element?.original_title || element?.name || element?.original_name}
                onClick={handleOpen}
            />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal} id="modal">
                    <div id="poster__img">
                        <img src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`} alt={element?.title || element?.original_title || element?.name || element?.original_name} />
                    </div>

                    {elementId ?
                        <Button variant="contained" onClick={removeFromMyList} sx={{ mt: 3 }}>- Remove from my list</Button>

                        :

                        <Button variant="contained" onClick={addToMyList} sx={{ mt: 3 }}>+ Add to my list</Button>
                    }

                    <Typography id="modal-modal-title" variant="h4" sx={{ fontWeight: 'bold', mt: 2 }}>
                        {element?.title || element?.original_title || element?.name || element?.original_name}
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {element?.overview || element?.description}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}

export default Poster;
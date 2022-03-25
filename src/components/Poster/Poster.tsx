import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useAppDispatch();

    const { user } = useAppSelector(state => state);

    function addToMyList() {
        console.log(`Add [${element?.title || element?.original_title || element?.name || element?.original_name}] to my list`);
        localStorage.setItem(`${element?.id}`, JSON.stringify(element));
    }

    function removeFromMyList() {
        console.log(`Remove [${element?.title || element?.original_title || element?.name || element?.original_name}] from my list`);
        localStorage.removeItem(`${element?.id}`);
    }

    return (
        <>
            <img className="row__poster"
                key={element.id}
                src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                alt={element?.title || element?.original_title || element?.name || element?.original_name}
                onClick={() => {
                    console.log(element);
                    handleOpen();
                }}
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

                    {localStorage.getItem(`${element.id}`) ?
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
import React from 'react';
import './Modal.css';

interface ModalProps {
    data: any[];
}

function Modal({ data }: ModalProps) {
    return (
        <div className='modal'>
            <h1>
                {data[0].title || data[0].original_title || data[0].name || data[0].original_name}
            </h1>
        </div>
    );
}

export default Modal;
import React from 'react';
import Row from '../../components/Row/Row';
import './MyList.css';

function getDatasFromLocalstorage() {
    const myList: any[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage[i]);
    }
}

function MyList() {
    return (
        <div className='myList'>
            <div className='myList__container'>
                <Row title='' data={myList} />
            </div>
        </div>
    );
}

export default MyList;
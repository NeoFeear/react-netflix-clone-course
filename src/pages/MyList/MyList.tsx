import React, { useState } from 'react';
import Row from '../../components/Row/Row';
import './MyList.css';

function MyList() {

    const [myList, setMyList] = useState(localStorage.getItem('myList'));

    const showMyList = () => {
        if (myList) {
            let list = JSON.parse(myList);

            if (list.length > 0) {
                return (<Row title="My List" data={list} />);
            } else {
                return (<h2> Your list is empty</h2 >);
            }
        };
    };

    return (
        <div className='myList'>
            <div className='myList__container'>
                {showMyList()}
            </div>
        </div>
    );
}

export default MyList;
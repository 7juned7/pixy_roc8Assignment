import React, { useContext, useState } from 'react'
import SearchDataContext from '../context/SearchDataContext';
import "./../App.css"
import Preview from './Preview';
const Card = (data) => {
    const { popup, setPopup } = useContext(SearchDataContext);

    const handleClick = (e) => {
        setPopup(data);


    }

    return (<>

        <div className="card_container" onClick={handleClick}>
            < div className='search_imgs' >
                <img src={data.data.webformatURL} alt="" />

                <p>{data.data.tags}</p>
            </ div>

        </div>
    </>

    )
}

export default Card
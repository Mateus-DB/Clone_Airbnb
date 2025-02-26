import React from 'react'
import { useState } from 'react';
import './css/CardGroup.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.json'

function CardGroup({ options }) {

    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (e, i) => {
        setClickedId(i);

    }

    return (
        <div className='row mt-4'>
            {
                options.map((item, i) => (
                    <div key={i} className='col ' >
                        <div
                            onClick={(e) => handleClick(e, i)}
                            className={i === clickedId ? 'cardGroup active' : 'cardGroup'}>
                            <div className='icon'> {item.icon}</div>
                            <p className='text-truncate'> {item.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardGroup
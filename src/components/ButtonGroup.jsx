import React from 'react'
import { useState } from 'react'
//importar css do ButtonGroup
import './css/ButtonGroup.css'

function ButtonGroup({ buttons }) {
    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (e, i) => {
        setClickedId(i);

    }

    return (
        <div className='row mb-4'>
            {
                buttons.map((ButtonLabel, i) => (
                    <div key={i} className={i == 0 ? 'col-3' : 'col'} >
                        <button key={i}
                            onClick={(e) => handleClick(e, i)}
                            className={i === clickedId || clickedId == -1 && ButtonLabel == 'Qualquer um' ? ' w-100 btn-especial active' : ' w-100 btn-especial'}>
                            {ButtonLabel}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default ButtonGroup
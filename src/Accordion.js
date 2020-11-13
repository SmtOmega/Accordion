import React, {useState} from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'

const Accordion = ({id, title, info})=> {
    const [showInfo, setShowInfo] = useState(false)
    return (
    <div className="card">
        <div className="title">
            <h3>{title}</h3>
            <button onClick={()=> setShowInfo(!showInfo)} className="btn">
                {showInfo ? <FaMinus /> : <FaPlus />}
            </button>
        </div>
        <p>{showInfo ? info : ""}</p>
    </div>
    )
}

export default Accordion
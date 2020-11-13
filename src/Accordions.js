import { useState } from 'react'

import Accordion from './Accordion'

const Accordions = ({questions})=> {
    
    return (
    <div className="accordion">
        <div className="right-div">
            <h2>Questions And Answers About Login</h2>
        </div>
        <div className="left-div">
            {questions.map(question =>{
                return <Accordion key={question.id} {...question} />     
            })}
        </div>    
    </div>
    )
}

export default Accordions
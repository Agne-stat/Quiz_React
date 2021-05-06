import React from 'react';


function TextComp({theme}) {
    return (
        <div className="container__text">
            <h1>Are you ready?</h1>
            <p className="info">Find out how well you know <span>{theme}</span></p>
            
            <button className="btn start-btn">START</button>
        </div>
    )
}

export default TextComp

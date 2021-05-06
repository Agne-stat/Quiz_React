import React, { useContext } from 'react';
import { GameStateContext } from "../../helpers/Contexts"; 

function QuizMenu() {
    const { gameState, setGameState } = useContext(GameStateContext);

    return (
        <div className='wrapper'>
            <h1>Are you ready?</h1>
            <p className="info">Find out how well you know <span>HTML and CSS</span></p>
            <button className="btn start-btn" onClick={() => setGameState('playing')}>START</button>
        </div>
    )
}

export default QuizMenu

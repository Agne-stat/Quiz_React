import React, { useContext} from 'react';
import { GameStateContext } from "../../helpers/Contexts";  
 

function QuizMenu() {
    const { setGameState, themeName } = useContext(GameStateContext);


    return (
        <main className='quiz_menu'>
            <div className='container__text'>
                <h1>Are you ready?</h1>
                <p className="info">Find out how well you know <span>{themeName}</span></p>
                <button className="btn start-btn" onClick={() => setGameState('playing')}>START</button>
            </div>
        </main>
    )
}

export default QuizMenu

import React, {useContext} from 'react';
import { GameStateContext } from "../../helpers/Contexts";


function QuizEnd() {
    const { gameState, setGameState, score, setScore } = useContext(GameStateContext);
    return (
        <div className="container__text">
            <p>{score}</p>
        </div>
    )
}

export default QuizEnd

import React, {useState} from 'react';
import { GameStateContext } from "../helpers/Contexts";
import QuizMenu from '../components/Quiz/QuizMenu';
import QuizGame from '../components/Quiz/QuizGame';
import QuizEnd from '../components/Quiz/QuizEnd';

function Quiz({themeName}) {

    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);
    const [userName, setUserName] = useState('');

    return (
        <div>
            <GameStateContext.Provider
                value={{
                gameState,
                setGameState,
                score,
                setScore, 
                userName, 
                setUserName
                }}
            >
                {gameState === "menu" && <QuizMenu themeName={themeName}/>}
                {gameState === "playing" && <QuizGame />}
                {gameState === "finished" && <QuizEnd />}
            </GameStateContext.Provider>

        </div>
    )
}

export default Quiz


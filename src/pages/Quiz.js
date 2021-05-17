import React, {useState} from 'react';
import { GameStateContext } from "../helpers/Contexts";
import QuizMenu from '../components/Quiz/QuizMenu';
import QuizGame from '../components/Quiz/QuizGame';
import QuizEnd from '../components/Quiz/QuizEnd';
import CorrectAnswers from '../components/Quiz/CorrectAnswers';

function Quiz({themeName}) {

    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);
    const [userName, setUserName] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);


    return (
        <div>
            <GameStateContext.Provider
                value={{
                gameState,
                setGameState,
                score,
                setScore, 
                userName, 
                setUserName,
                userAnswers,
                setUserAnswers
                }}
            >
                {gameState === "menu" && <QuizMenu themeName={themeName}/>}
                {gameState === "playing" && <QuizGame />}
                {gameState === "finished" && <QuizEnd />}
                {gameState === "correctAnswers" && <CorrectAnswers />}
            </GameStateContext.Provider>

        </div>
    )
}

export default Quiz


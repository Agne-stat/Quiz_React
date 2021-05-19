import React, {useState, useContext, useEffect} from 'react';
import { GameStateContext } from "../helpers/Contexts";
import { ThemeSelectContext } from "../helpers/Contexts";
import QuizMenu from '../components/Quiz/QuizMenu';
import QuizGame from '../components/Quiz/QuizGame';
import QuizEnd from '../components/Quiz/QuizEnd';
import CorrectAnswers from '../components/Quiz/CorrectAnswers';
import { Questions1 } from '../helpers/Questions1'
import { Questions2 } from '../helpers/Questions2'
import { Questions3 } from '../helpers/Questions3'
import { Questions4 } from '../helpers/Questions4'
import './Quiz.css'

function Quiz() {
    const { data, theme, setData } = useContext(ThemeSelectContext);

    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);
    const [userName, setUserName] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    const [themeName, setThemeName] = useState('')

    useEffect(() => {
        if (theme === 'HTML') {
            let questions1 = Questions1
            setData(questions1)
            setThemeName('HTML and CSS')
        } else if (theme === 'JavaScript') {
            let questions2 = Questions2
            setData(questions2)
            setThemeName('JavaScript')
        } else if (theme === 'Node') {
            let questions3 = Questions3
            setData(questions3)
            setThemeName('Node.js')
        } else if (theme === 'React') {
            let questions4 = Questions4
            setData(questions4)
            setThemeName('React.js')
        } else {
            return
        }
        console.log(data)

        return {
            
        }
    }, [])


    return (
        <>
            <GameStateContext.Provider
                value={{
                gameState,
                setGameState,
                score,
                setScore, 
                userName, 
                setUserName,
                userAnswers,
                setUserAnswers, 
                themeName
                }}
            >
                {gameState === "menu" && <QuizMenu />}
                {gameState === "playing" && <QuizGame />}
                {gameState === "finished" && <QuizEnd />}
                {gameState === "correctAnswers" && <CorrectAnswers />}

            </GameStateContext.Provider>

            

        </>
    )
}

export default Quiz


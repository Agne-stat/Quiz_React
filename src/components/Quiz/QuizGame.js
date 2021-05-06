import React, {useState, useContext, useEffect, useRef} from 'react';
import { Questions } from '../../helpers/Questions';
import { GameStateContext } from "../../helpers/Contexts";

function QuizGame() {
    const { gameState, setGameState, score, setScore } = useContext(GameStateContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState();

    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    let usersList2 = JSON.parse(localStorage.getItem("quiz2Scores")) || [];

    let time = useRef()

    console.log(optionChosen, score);
    console.log("labas")

    const setTimer = () => {
        let startTime = 0;
        
        time = setInterval(() => {
            if(Questions.length > currentQuestion) {
                ++startTime;
            } 
    
            // if (questionNumber === questions.length && startBtn.innerText === "Restart") {
            //     return;
            // }
     
            let minutes = Math.floor(startTime / 60);
            let seconds = startTime - minutes * 60;
            
            setSeconds(seconds);
            setMinutes(minutes);
            
        }, 1000)
    }

    useEffect(() => {
        setTimer();
    },[])


    const chooseOption = (option) => {
        setOptionChosen(option);

        let btns = document.querySelectorAll(".btn-answ");

        for (const btn of btns) {
            btn.disabled = true;
        }

    };

    const nextQuestion = () => {
        if (Questions[currentQuestion].correct === optionChosen) {
            setScore(score + 1);
            
          }
        setCurrentQuestion(currentQuestion + 1)

        let btns = document.querySelectorAll(".btn-answ");

        for (const btn of btns) {
            btn.disabled = false;
        }
    }

    const finishQuiz = () => {
        if (Questions[currentQuestion].asnwer == optionChosen) {
            setScore(score + 1);
        }

        let user = {
            score: score
        }
    
        usersList2.push(user);
        localStorage.setItem("quiz2Scores", JSON.stringify(usersList2));

        setGameState("finished");
    }

    return (
        <div>
            <h1>{Questions[currentQuestion].question}</h1>
            <div>
                <button className='btn-answ' onClick={() => chooseOption("optionA")}>{Questions[currentQuestion].optionA}</button>
                <button className='btn-answ' onClick={() => chooseOption("optionB")}>{Questions[currentQuestion].optionB}</button>
                <button className='btn-answ' onClick={() => chooseOption("optionC")}>{Questions[currentQuestion].optionC}</button>
            </div>

            <div className='time'>{minutes}:{seconds}</div>

            {currentQuestion == Questions.length - 1 ? (
                <button onClick={finishQuiz} id="nextQuestion">
                Finish Quiz
                </button>
            ) : (
                <button onClick={nextQuestion} id="nextQuestion">
                Next Question
                </button>
            )}

        </div>
    )
}

export default QuizGame


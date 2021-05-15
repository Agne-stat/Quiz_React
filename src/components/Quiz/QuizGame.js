import React, {useState, useContext, useEffect, useRef} from 'react';
import { GameStateContext } from "../../helpers/Contexts";
import { ThemeSelectContext } from "../../helpers/Contexts";
import './Quiz.css';

function QuizGame() {
    const { setGameState, score, setScore } = useContext(GameStateContext);
    const { data, userTime, setUserTime} = useContext(ThemeSelectContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    let progress = useRef();
    let fullTime = ''

    const setTimer = () => {
        let startTime = 0;
        
       setInterval(() => {
            if(data.length > currentQuestion) {
                ++startTime;
            } 
     
            let minutes2 = Math.floor(startTime / 60);
            let seconds2 = startTime - minutes2 * 60;
            let seconds = '';
            let minutes = '';

            if(minutes2 < 10) {
                if(seconds2 < 10) {
                    seconds = `0${seconds2}`;
                    minutes = `0${minutes2}`

                } else if (seconds2 < 60) {
                    seconds = `${seconds2}`;
                    minutes = `0${minutes2}`

                }
            } else {
                if (seconds2 < 10) {
                    seconds = `0${seconds2}`;
                    minutes = `${minutes2}`
                } else if (seconds2 < 60) {
                    seconds = `${seconds2}`;
                    minutes = `${minutes2}`
                }
            }
            
            setSeconds(seconds);
            setMinutes(minutes);
            
        }, 1000)
    }

    

    useEffect(() => {
        setTimer();
            
    }, [])


    const handleAnswerOptionClick = (correct) => {
        if (correct) {
			setScore(score + 1);
		}

        // Progress 
        progress.current.style.width = `${((currentQuestion + 1) / data.length) * 100}%`;

        console.log(currentQuestion / data.length)
		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
            fullTime = document.querySelector('.time').innerHTML;
            console.log(fullTime)
            setUserTime(fullTime)
            console.log(userTime)
            setGameState("finished");
  
		}

    }

    return (
        <div>
            <div className='question-section'>
                <div className='question-text'>{data[currentQuestion].question}</div>
            </div>
            <div className='answer-section'>
                    {data[currentQuestion].answers.map((answerOption) => (
                        <button key={answerOption.index} onClick={() => handleAnswerOptionClick(answerOption.correct)}>{answerOption.text}</button>
                    ))}
            </div>
            <div className='time'>{minutes}:{seconds}</div>
            <div className="progress">
               <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ref={progress}>
                </div>
            </div>
        </div>
    )
}

export default QuizGame




/* eslint-disable no-unused-vars */
import React, {useContext, useState, useRef, useEffect} from 'react';
import { GameStateContext } from "../../helpers/Contexts";
import { Questions } from '../../helpers/Questions';


function QuizEnd() {
    const { gameState, setGameState, score, setScore, userName, setUserName } = useContext(GameStateContext);

    const [submited, setSubmited] = useState(false);

    let input = useRef();

    let usersList = JSON.parse(localStorage.getItem("quizScoresReact")) || [];

    useEffect(() => {
        if(submited === true) {
            input.current.value = '';
        }
    }, [submited])


    const saveUser = (e) => {
        e.preventDefault();

        let user = {
            name: userName,
            score: score
        }
    
        usersList.push(user);
        localStorage.setItem("quizScoresReact", JSON.stringify(usersList));

        setSubmited(true);
    }

    return (
        <div className="container__text">

            <p>Correct asnwers: {score} from {Questions.length} questions</p>

            <form onSubmit={saveUser}>
                <label>Enter Your Name:</label>
                <input
                    ref={input}
                    type="text"
                    onChange={(e) => {
                    setUserName(e.target.value);
                    }}
                />
                <button type='submit'>Save your score</button>
            </form>

            {submited && <p>Your scores has been saved !</p>}
            
        </div>
    )
}

export default QuizEnd

import React, {useContext, useState, useRef, useEffect} from 'react';
import { GameStateContext } from "../../helpers/Contexts";
import { ThemeSelectContext } from "../../helpers/Contexts";


function QuizEnd() {
    const { score, userName, setUserName, userAnswers, setGameState } = useContext(GameStateContext);
    const { data, userTime, theme  } = useContext(ThemeSelectContext);

    const [submited, setSubmited] = useState(false);
    const [maxScore, setMaxScore] = useState(false);
    const [lowScore, setLowScore] = useState(false);

    let input = useRef();

    let usersList = JSON.parse(localStorage.getItem("quizReact")) || [];


    useEffect(() => {
        if(submited === true) {
            input.current.value = '';
        } 

        const scoresArr = usersList.map(item => { 
            return item.score
        })

        let currentMaxScore = Math.max(...scoresArr)

        if (score > currentMaxScore) {
            setMaxScore(true)
        }

        if (score < 3) {
            setLowScore(true)
        }

        console.log(usersList);
        console.log(scoresArr)
        console.log(currentMaxScore);
        console.log(userAnswers)

        return {}
    // eslint-disable-next-line
    }, [submited, score])

    


    const saveUser = (e) => {
        e.preventDefault();

        let user = {
            name: userName,
            score: score, 
            time: userTime,
            theme: theme
        }
    
        usersList.push(user);
        localStorage.setItem("quizReact", JSON.stringify(usersList));

        if(input.current.value !== '') {
            setSubmited(true);
        }

    }

    return (
        <div className="container__text">

            <p>Correct asnwers: {score} from {data.length} questions</p>

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

            <button onClick={()=> setGameState("correctAnswers")}>Correct answers</button>

            {maxScore && <p>It's a RECORD !</p>}
            {lowScore && <p>Next time you'll do better !</p>}
            {submited && <p>Your scores has been saved </p>}
            
        </div>
    )
}

export default QuizEnd

import React, {useContext, useState, useRef, useEffect} from 'react';
import { GameStateContext } from "../../helpers/Contexts";
import { ThemeSelectContext } from "../../helpers/Contexts";


function QuizEnd() {
    const { score, userName, setUserName } = useContext(GameStateContext);
    const { data, userTime, theme  } = useContext(ThemeSelectContext);

    const [submited, setSubmited] = useState(false);

    let input = useRef();

    let usersList = JSON.parse(localStorage.getItem("quizScoresReact")) || [];

    useEffect(() => {
        if(submited === true) {
            input.current.value = '';
        }

        return {}
    }, [submited])

    


    const saveUser = (e) => {
        e.preventDefault();

        let user = {
            name: userName,
            score: score, 
            time: userTime,
            theme: theme
        }
    
        usersList.push(user);
        localStorage.setItem("quizScoresReact", JSON.stringify(usersList));

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

            {submited && <p>Your scores has been saved !</p>}
            
        </div>
    )
}

export default QuizEnd

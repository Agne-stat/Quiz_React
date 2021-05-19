import React, {useContext, useState, useRef, useEffect} from 'react';
import { GameStateContext } from "../../helpers/Contexts";
import { ThemeSelectContext } from "../../helpers/Contexts";


function QuizEnd() {
    const { score, userName, setUserName, userAnswers, setGameState, themeName } = useContext(GameStateContext);
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
            theme: themeName
        }
    
        usersList.push(user);
        localStorage.setItem("quizReact", JSON.stringify(usersList));

        if(input.current.value !== '') {
            setSubmited(true);
        }

    }

    return (
        <main>
            <div className='results_container'>
                <div className='info'>
                    <p className='user_scores'>Correct asnwers: {score} from {data.length} questions</p>
                    {maxScore && <p className='record'>It's a RECORD !</p>}
                    {lowScore && <p className='low_score'>Next time you'll do better !</p>}
                </div>


                <form className='form' onSubmit={saveUser}>
                    <div className='form_container'>
                        <label className='name_container'>Enter Your Name:</label>
                        <input className='name-input'
                            ref={input}
                            type="text"
                            onChange={(e) => {
                            setUserName(e.target.value);
                            }}
                        />
                    </div>

                    <div className='submit-container'>
                        <button className="submit-btn" type='submit'>Save score</button>
                        {submited && <p>Your scores has been saved </p>}
                    </div>
                    
                    
                </form>

                {/* <div className='right-answ'>
                    <button className='right-answbtn' onClick={()=> setGameState("correctAnswers")}>Correct answers</button>
                </div> */}

            
                
            </div>
            
            
        </main>
    )
}

export default QuizEnd

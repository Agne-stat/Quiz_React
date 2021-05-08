import React, {useState, useContext, useEffect, useRef} from 'react';
import { Questions } from '../../helpers/Questions';
import { GameStateContext } from "../../helpers/Contexts";

function QuizGame() {
    console.log(Questions)
    const { gameState, setGameState, score, setScore } = useContext(GameStateContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    }

    // const finishQuiz = () => {
    //     setGameState("finished");
    // }


    return (
        <div>
            {showScore ? (
				<div className='score-section'>
					You scored {score} out of {Questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-text'>{Questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{Questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>

				</>
			)}

            {/* {currentQuestion == Questions.length - 1  ? (
                <button onClick={finishQuiz} id="nextQuestion">
                Finish Quiz
                </button>
            ) : (
                <button>Next Question</button>
            )} */}

            

        </div>
    )
}

export default QuizGame




// import React, {useState, useContext, useEffect, useRef} from 'react';
// import { Questions } from '../../helpers/Questions';
// import { GameStateContext } from "../../helpers/Contexts";

// function QuizGame() {
//     const { gameState, setGameState, score, setScore } = useContext(GameStateContext);

//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [optionChosen, setOptionChosen] = useState('');

//     console.log(optionChosen, score, currentQuestion)



//     useEffect(() => {
        
//         if (Questions[currentQuestion].correct === optionChosen) {
//             console.log('labas')
//             setScore(score + 1);
                
//         }

//         console.log(score,optionChosen )
            

//         return () => {
//                 if (Questions[Questions.length-1].asnwer == optionChosen) {
//                     setScore(score + 1);
//                     console.log('3atsakymas teisingas')
//                 }
//                 console.log(score,optionChosen )
//         }  

//     },[currentQuestion])




//     const nextQuestion = () => {

//         setCurrentQuestion(currentQuestion + 1)

//         let btns = document.querySelectorAll(".btn-answ");

//         for (const btn of btns) {
//             btn.disabled = false;
//         }

//     }

    // const finishQuiz = () => {
    //     setGameState("finished");
    // }



//     return (
//         <div>
//             <h1>{Questions[currentQuestion].question}</h1>
//             <div>
//                 <button className='btn-answ' onClick={() => setOptionChosen("optionA")}>{Questions[currentQuestion].optionA}</button>
//                 <button className='btn-answ' onClick={() => setOptionChosen("optionB")}>{Questions[currentQuestion].optionB}</button>
//                 <button className='btn-answ' onClick={() => setOptionChosen("optionC")}>{Questions[currentQuestion].optionC}</button>
//             </div>

//             {/* <div className='time'>{minutes}:{seconds}</div> */}

            // {currentQuestion == Questions.length - 1  ? (
            //     <button onClick={finishQuiz} id="nextQuestion">
            //     Finish Quiz
            //     </button>
            // ) : (
            //     <button onClick={nextQuestion} id="nextQuestion">
            //     Next Question
            //     </button>
            // )}

//         </div>
//     )
// }

// export default QuizGame



// import React, { useState } from 'react';

// export default function App() {
// 	const questions = [
// 		{
// 			questionText: 'What is the capital of France?',
// 			answerOptions: [
// 				{ answerText: 'New York', isCorrect: false },
// 				{ answerText: 'London', isCorrect: false },
// 				{ answerText: 'Paris', isCorrect: true },
// 				{ answerText: 'Dublin', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'Who is CEO of Tesla?',
// 			answerOptions: [
// 				{ answerText: 'Jeff Bezos', isCorrect: false },
// 				{ answerText: 'Elon Musk', isCorrect: true },
// 				{ answerText: 'Bill Gates', isCorrect: false },
// 				{ answerText: 'Tony Stark', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'The iPhone was created by which company?',
// 			answerOptions: [
// 				{ answerText: 'Apple', isCorrect: true },
// 				{ answerText: 'Intel', isCorrect: false },
// 				{ answerText: 'Amazon', isCorrect: false },
// 				{ answerText: 'Microsoft', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'How many Harry Potter books are there?',
// 			answerOptions: [
// 				{ answerText: '1', isCorrect: false },
// 				{ answerText: '4', isCorrect: false },
// 				{ answerText: '6', isCorrect: false },
// 				{ answerText: '7', isCorrect: true },
// 			],
// 		},
// 	];

// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [showScore, setShowScore] = useState(false);
// 	const [score, setScore] = useState(0);

// 	const handleAnswerOptionClick = (isCorrect) => {
// 		if (isCorrect) {
// 			setScore(score + 1);
// 		}

// 		const nextQuestion = currentQuestion + 1;
// 		if (nextQuestion < questions.length) {
// 			setCurrentQuestion(nextQuestion);
// 		} else {
// 			setShowScore(true);
// 		}
// 	};
// 	return (
// 		<div className='app'>
// 			{showScore ? (
// 				<div className='score-section'>
// 					You scored {score} out of {questions.length}
// 				</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question {currentQuestion + 1}</span>/{questions.length}
// 						</div>
// 						<div className='question-text'>{questions[currentQuestion].questionText}</div>
// 					</div>
// 					<div className='answer-section'>
// 						{questions[currentQuestion].answerOptions.map((answerOption) => (
// 							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
// }





// import React, {useState, useContext, useEffect, useRef} from 'react';
// import { Questions } from '../../helpers/Questions';
// import { GameStateContext } from "../../helpers/Contexts";

// function QuizGame() {
//     const { gameState, setGameState, score, setScore } = useContext(GameStateContext);

//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [optionChosen, setOptionChosen] = useState('');

//     // const [minutes, setMinutes] = useState(0);
//     // const [seconds, setSeconds] = useState(0);


//     // let time = useRef()

//     // const setTimer = () => {
//     //     let startTime = 0;
        
//     //     time = setInterval(() => {
//     //         if(Questions.length > currentQuestion) {
//     //             ++startTime;
//     //         } 
     
//     //         let minutes = Math.floor(startTime / 60);
//     //         let seconds = startTime - minutes * 60;
            
//     //         setSeconds(seconds);
//     //         setMinutes(minutes);
            
//     //     }, 1000)
//     // }

//     // setTimer();

//     // useEffect(() => {
//     //     return () => console.log('component remove')
//     // },[score])

//     console.log(optionChosen, score)

//     const chooseOption = (option) => {
//         setOptionChosen(option);

//         let btns = document.querySelectorAll(".btn-answ");

//         for (const btn of btns) {
//             btn.disabled = true;
//         }

//     };

//     const nextQuestion = () => {
//         // if (Questions[currentQuestion].correct === optionChosen) {
//         //     setScore(prevState => prevState + 1);
            
//         //   }
//         // setCurrentQuestion(currentQuestion + 1)

//         let btns = document.querySelectorAll(".btn-answ");

//         for (const btn of btns) {
//             btn.disabled = false;
//         }

//     }

//     useEffect(() => {
//         if (Questions[currentQuestion].asnwer == optionChosen) {
//             setScore(prevState => prevState + 1);
//         }

//         console.log(optionChosen,score)
//         return () => {
//             if (Questions[currentQuestion].asnwer == optionChosen) {
//                 setScore(prevState => prevState + 1);
//             }

//             console.log(optionChosen,score)
//         }
//     },)

//     const finishQuiz = () => {
//         // if (Questions[currentQuestion].asnwer == optionChosen) {
//         //     setScore(score + 1);
//         // }

//         setGameState("finished");
//     }

//     return (
//         <div>
//             <h1>{Questions[currentQuestion].question}</h1>
//             <div>
//                 <button className='btn-answ' onClick={() => chooseOption("optionA")}>{Questions[currentQuestion].optionA}</button>
//                 <button className='btn-answ' onClick={() => chooseOption("optionB")}>{Questions[currentQuestion].optionB}</button>
//                 <button className='btn-answ' onClick={() => chooseOption("optionC")}>{Questions[currentQuestion].optionC}</button>
//             </div>

//             {/* <div className='time'>{minutes}:{seconds}</div> */}

//             {currentQuestion == Questions.length - 1  ? (
//                 <button onClick={finishQuiz} id="nextQuestion">
//                 Finish Quiz
//                 </button>
//             ) : (
//                 <button onClick={nextQuestion} id="nextQuestion">
//                 Next Question
//                 </button>
//             )}

//         </div>
//     )
// }

// export default QuizGame



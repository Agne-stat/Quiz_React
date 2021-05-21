// import React, {useContext, useEffect, useRef} from 'react';
// import { GameStateContext } from "../../helpers/Contexts";
// import { ThemeSelectContext } from "../../helpers/Contexts";

// function CorrectAnswers() {
//     const {userAnswers, score} = useContext(GameStateContext);
//     const { data } = useContext(ThemeSelectContext);

//     // const [corectAnswer, setCorectAnswer] = useState(false)

//     let userA = useRef();

//     useEffect(() => {

//         console.log(document.querySelector('.user_answ'));
//         console.log(userAnswers)


//         // newArr = userAnswers.map((a) => {
//         //     return a.text
//         // })
//         // console.log(newArr)

//         // data.forEach((q) => {
//         //     q.answers.forEach(a => {
//         //         userAnswers.forEach((answ) => {
//         //             if(a.correct === true && a.text === answ) {
//         //                 userAnsw.current.style.color = 'red'
//         //             } else if (a.correct === false && a.text === answ) {
//         //                 userAnsw.current.style.color = 'red'
//         //             }
//         //         })
//         //     })
//         // })

        
        


//         return {}
//     // eslint-disable-next-line
//     },[])

//     return (
//         <div>
//             <p>Correct answers {score} out of {data.length}</p>
//             {data.map((q) => (
//                 <div>
//                     <p>{q.question}</p>

//                     {q.answers.map((a) => (
//                         <>
                        
//                         <li ref={userA} className='user_answ'>{a.text}</li>

//                         {/* {userAnswers.forEach((answ) => {
//                             if(a.text === answ.text) { // cai turetu buti gerai, tik reikia dar pasigilinti, nes kartais uzsibugina react
//                                 // document.querySelector('.user_answ').classList.add('correct')
                                
//                                 setCorectAnswer(true)
                                
                                
                            
//                             } else if (a.correct === false && a.text === answ) {
//                                 // document.querySelector('.user_answ').classList.add('wrong')
//                                 // userA.current.style.color = 'red'
                                
//                             }
//                         })} */}

                        
//                         </>
//                     ))}
//                 </div>
//             ))}

//         </div>
//     )
// }

// export default CorrectAnswers

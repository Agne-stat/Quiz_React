import React, {useState} from 'react';
import { GameStateContext } from "../helpers/Contexts";
import QuizMenu from '../components/Quiz/QuizMenu';
import QuizGame from '../components/Quiz/QuizGame';
import QuizEnd from '../components/Quiz/QuizEnd';

function Quiz() {
    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);
    const [userName, setUserName] = useState('');

    return (
        <main>
            <GameStateContext.Provider
                value={{
                gameState,
                setGameState,
                score,
                setScore, 
                userName, 
                setUserName
                }}
            >
                {gameState === "menu" && <QuizMenu />}
                {gameState === "playing" && <QuizGame />}
                {gameState === "finished" && <QuizEnd />}
            </GameStateContext.Provider>

        </main>
    )
}

export default Quiz


// import "./App.css";
// import Menu from "./components/Menu";
// import Quiz from "./components/Quiz";
// import EndScreen from "./components/EndScreen";
// import { useState } from "react";
// import { GameStateContext } from "./helpers/Contexts";
// import LogicComp from '../components/Quiz/LogicComp';
// import TextComp from '../components/Quiz/TextComp';
// // ['menu', 'playing', 'finished']
// function App() {
//   const [gameState, setGameState] = useState("menu");
//   const [userName, setUserName] = useState("");
//   const [score, setScore] = useState(0);

//   return (
//     <div className="App">
//       <h1>Quiz App</h1>
//       <GameStateContext.Provider
//         value={{
//           gameState,
//           setGameState,
//           userName,
//           setUserName,
//           score,
//           setScore,
//         }}
//       >
//         {gameState === "menu" && <Menu />}
//         {gameState === "playing" && <Quiz />}
//         {gameState === "finished" && <EndScreen />}
//       </GameStateContext.Provider>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//pages
import Home from './pages/Home'
import Themes from './pages/Themes'
import Scores from './pages/Scores'
import Quiz from './pages/Quiz'
//components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="Quiz">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/themes'>
            <Themes />
          </Route>
          <Route path='/scores'>
            <Scores />
          </Route>
          <Route path='/quiz'>
            <Quiz />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



// import "./App.css";
// import Menu from "./components/Menu";
// import Quiz from "./components/Quiz";
// import EndScreen from "./components/EndScreen";
// import { useState } from "react";
// import { GameStateContext } from "./helpers/Contexts";
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

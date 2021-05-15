import React, {useState, useRef} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { ThemeSelectContext } from "./helpers/Contexts";
//pages
import Home from './pages/Home'
import Themes from './pages/Themes'
import Scores from './pages/Scores'
import Quiz from './pages/Quiz'
//components
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  const [theme, setTheme] = useState('');
  const [data, setData] = useState([]);
  const [userTime, setUserTime] = useState('')

  const btn = useRef();

  return (
    <div className="Quiz">
      <ThemeSelectContext.Provider value={{theme, setTheme, data, setData, btn, userTime, setUserTime}}>
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
      </ThemeSelectContext.Provider>
    </div>
  );
}

export default App;




import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeSelectContext } from "../helpers/Contexts";
import './Home.css'

function Home() {
    const { setTheme} = useContext(ThemeSelectContext);

    let random = (Math.floor(Math.random()*4) + 1).toString();

    return (
        <main className='home'>
            <div className="wrapper">
                <div className="container">
                    <h1>TEST YOUR PROGRAMMING SKILLS</h1>
                    <Link to='/quiz'>
                        <button  onClick={() => setTheme(random)} className="start__btn"><span className="start__btn-start">START QUIZ</span><span className="start__btn-span hide">RANDOM THEME</span></button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home

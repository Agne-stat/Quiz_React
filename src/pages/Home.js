import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeSelectContext } from "../helpers/Contexts";
// import { Questions1 } from '../helpers/Questions1'
// import { Questions2 } from '../helpers/Questions2'
// import { Questions3 } from '../helpers/Questions3'
// import { Questions4 } from '../helpers/Questions4'
import './Home.css'

function Home() {
    const { setTheme} = useContext(ThemeSelectContext);

    let random = (Math.floor(Math.random()*4) + 1).toString();
    console.log(random)

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

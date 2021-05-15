import React from 'react';
import { Link } from 'react-router-dom';
// import { ThemeSelectContext } from "../helpers/Contexts";
// import { Questions1 } from '../helpers/Questions1'
// import { Questions2 } from '../helpers/Questions2'
// import { Questions3 } from '../helpers/Questions3'
// import { Questions4 } from '../helpers/Questions4'
import './Home.css'

function Home() {
    // const { setTheme, setData, data} = useContext(ThemeSelectContext);

    // const randomTheme = () => {
    //     let random = Math.floor(Math.random()*4) + 1;
    //     setTheme(random);
    //     console.log(`Questions${random}`)
    //     let questions = `Questions${random}`
    //     let qdata = questions

    //     setData(qdata)

    //     console.log(qdata)

    // }

    return (
        <main>
            <div className="wrapper">
                <div className="container">
                    <Link to='/quiz'>
                        <button className="start__btn" >START QUIZ<span className="start__btn-span hide">RANDOM THEME</span></button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home

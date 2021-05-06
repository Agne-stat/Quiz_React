import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <main>
            <div className="wrapper">
                <div className="container">
                    <Link to='/quiz'>
                        <button className="start__btn">START QUIZ<span className="start__btn-span hide">RANDOM THEME</span></button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home

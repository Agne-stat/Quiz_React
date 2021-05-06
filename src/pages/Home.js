import React from 'react';
import './Home.css'

function Home() {
    return (
        <main>
            <div className="wrapper">
                <div className="container">
                    <button className="start__btn">START QUIZ<span className="start__btn-span hide">RANDOM THEME</span></button>
                </div>
            </div>
        </main>
    )
}

export default Home

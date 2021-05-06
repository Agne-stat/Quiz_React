import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <header>
            <nav className="container">
                <ul className="navigation">
                    <li className="navigation__item">
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to='/themes'>THEMES</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to='/scores'>SCORES</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeSelectContext } from "../helpers/Contexts";
import './Header.css'

function Header() {
    const { setData, setTheme} = useContext(ThemeSelectContext);

    const reset= () => {
        setData([])
        setTheme('')
    }

    return (
        <header>
            <nav className="container">
                <ul className="navigation">
                    <li className="navigation__item">
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to='/themes'>
                            <button onClick={reset}>THEMES</button>
                        </Link>
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

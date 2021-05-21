import React, {useContext} from 'react'
import { ThemeSelectContext } from "../helpers/Contexts";
import { Link } from 'react-router-dom';
import './Themes.css'

function Themes() {
    const { setTheme} = useContext(ThemeSelectContext);

    // let usersList = JSON.parse(localStorage.getItem("quizReact")) || [];

    // const [arr1, setArr1] = useState([])
    // const [arr2, setArr2] = useState([])
    // const [arr3, setArr3] = useState([])
    // const [arr4, setArr4] = useState([])

    // let newArr1 = []

    // useEffect(() => {
    //     usersList.filter(user => user.theme === 'HTML and CSS');


    //     setArr1(usersList)
    //     console.log(arr1)

        
    // },[])

    return (
        <main className='themes'>
            <div className="wrapper_themes">
                    <div className="container_themes">
                             
                            <div className="container__btns">
                                
                                <Link to='/quiz'>
                                    <button className='theme__btn' id='theme1-btn' onClick={() => setTheme('1')}><span className='theme__info'>HTML and CSS</span><span className="theme1__info hide"></span><span className="theme1__info hide">10 Questions</span></button>
                                </Link>

                                <Link to='/quiz'>
                                    <button className='theme__btn' id='theme2-btn' onClick={() => setTheme('2')}><span className='theme__info'>JavaScript</span><span className="theme2__info hide"></span><span className="theme2__info hide">15 Questions</span></button>
                                </Link>

                                <Link to='/quiz'>
                                    <button className='theme__btn' id='theme3-btn' onClick={() => setTheme('3')}><span className='theme03__info'>Node.js</span><span className="theme3__info hide"></span><span className="theme3__info hide">9 Questions</span></button>
                                </Link>

                                <Link to='/quiz'>
                                    <button className='theme__btn' id='theme4-btn' onClick={() => setTheme('4')}><span className='theme__info'>React.js</span><span className="theme4__info hide"></span><span className="theme4__info hide">12 Questions</span></button>
                                </Link>
                    
                            </div>
            
                    </div>
            </div>
        </main>
    )
}

export default Themes

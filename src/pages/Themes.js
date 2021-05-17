import React, {useEffect, useContext} from 'react'
import { ThemeSelectContext } from "../helpers/Contexts";
import Quiz from './Quiz';
import { Questions1 } from '../helpers/Questions1'
import { Questions2 } from '../helpers/Questions2'
import { Questions3 } from '../helpers/Questions3'
import { Questions4 } from '../helpers/Questions4'
import './Themes.css'




function Themes() {
    const { data, theme, setData, setTheme, btn} = useContext(ThemeSelectContext);


    useEffect(() => {
        btn.current.style.display = 'flex';
        if (theme === 'HTML') {
            let questions1 = Questions1
            setData(questions1)
        } else if (theme === 'JavaScript') {
            let questions2 = Questions2
            setData(questions2)
        } else if (theme === 'Node') {
            let questions3 = Questions3
            setData(questions3)
        } else if (theme === 'React') {
            let questions4 = Questions4
            setData(questions4)
        } else {
            return
        }
        
        console.log(data)

        return (
            btn.current.style.display = 'none'
        )
        
    }, [data, theme, setData, btn])

    return (
        <main className='themes'>
            <div className="wrapper_themes">
                    <div className="container_themes">
                        
                            <div className="container__quiz">
                                    {theme === 'HTML' && <Quiz themeName={'HTML and CSS'}/>}
                                    {theme === 'JavaScript' && <Quiz themeName={'JavaScript'}/>}
                                    {theme === 'Node' && <Quiz themeName={'Node.js'}/>}
                                    {theme === 'React' && <Quiz themeName={'React.js'}/>}
                            </div>
                        
                        
                            <div ref={btn} className="container__btns">
                                <button className='theme__btn' id='theme1-btn' onClick={() => setTheme('HTML')}><span className='theme__info'>HTML and CSS</span><span class="theme1__info hide"></span><span class="theme1__info hide">10 Questions</span></button>

                                <button className='theme__btn' id='theme2-btn' onClick={() => setTheme('JavaScript')}><span className='theme__info'>JavaScript</span><span class="theme2__info hide"></span><span class="theme2__info hide">15 Questions</span></button>

                                <button className='theme__btn' id='theme3-btn' onClick={() => setTheme('Node')}><span className='theme03__info'>Node.js</span><span class="theme3__info hide"></span><span class="theme3__info hide">9 Questions</span></button>

                                <button className='theme__btn' id='theme4-btn' onClick={() => setTheme('React')}><span className='theme__info'>React.js</span><span class="theme4__info hide"></span><span class="theme4__info hide">12 Questions</span></button>
                            </div>
            
                    </div>
            </div>
        </main>
    )
}

export default Themes

import React, {useEffect, useContext} from 'react'
import { ThemeSelectContext } from "../helpers/Contexts";
import Quiz from './Quiz';
import { Questions1 } from '../helpers/Questions1'
import { Questions2 } from '../helpers/Questions2'
import { Questions3 } from '../helpers/Questions3'
import { Questions4 } from '../helpers/Questions4'




function Themes() {
    const { data, theme, setData, setTheme, btn} = useContext(ThemeSelectContext);


    useEffect(() => {
        btn.current.style.display = 'block';
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
        <main>
            <div className="wrapper">
                    <div className="container">
                        
                            <div className="container__quiz">
                                    {theme === 'HTML' && <Quiz themeName={'HTML and CSS'}/>}
                                    {theme === 'JavaScript' && <Quiz themeName={'JavaScript'}/>}
                                    {theme === 'Node' && <Quiz themeName={'Node.js'}/>}
                                    {theme === 'React' && <Quiz themeName={'React.js'}/>}
                            </div>
                        
                        
                            <div ref={btn} className="container__btns">
                                <button  onClick={() => setTheme('HTML')}>1</button>
                                <button  onClick={() => setTheme('JavaScript')}>2</button>
                                <button  onClick={() => setTheme('Node')}>3</button>
                                <button  onClick={() => setTheme('React')}>4</button>
                            </div>
            
                    </div>
            </div>
        </main>
    )
}

export default Themes

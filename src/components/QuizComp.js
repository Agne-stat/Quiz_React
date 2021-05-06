import React from 'react';
import TextComp from './Quiz/TextComp'

function QuizComp({themeName}) {
    // const themeName = {name}
    return (
        <div className='wrapper'>
            <div className='container'>
                <TextComp theme={themeName}/>
            </div>
        </div>
    )
}

export default QuizComp

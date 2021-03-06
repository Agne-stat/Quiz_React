import React, {useEffect, useState} from 'react';
import './Scores.css'

function Scores() {
    let usersList = JSON.parse(localStorage.getItem("quizReact")) || [];

    const [sortedList, setSortedList] = useState([])

    useEffect(() => {
        usersList.sort((a,b) => {
            if(a.score === b.score) {
                var x = a.time,
                  y = b.time;
                  if(x>y){
                    return 1;
                  }else{
                    return -1;
                  }
            }
            
            return b.score-a.score
          })
        
        setSortedList(usersList)
        
     // eslint-disable-next-line
    }, [])


    return (
        <main className='scores'>
            <div className='wrapper'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Score</th>
                            <th>Theme</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {sortedList.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.time}</td>
                                <td>{item.score}</td>
                                <td>{item.theme}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Scores

import React, {useEffect, useState} from 'react'

function Scores() {
    let usersList = JSON.parse(localStorage.getItem("quizReact")) || [];

    const [sortedList, setSortedList] = useState([])

    useEffect(() => {
        console.log(usersList)
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
        
        
    }, [])

    console.log(sortedList)

    return (
        <main>
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
        </main>
    )
}

export default Scores

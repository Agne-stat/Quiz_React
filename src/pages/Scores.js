import React from 'react'

function Scores() {
    let usersList = JSON.parse(localStorage.getItem("quizScoresReact")) || [];
    console.log(usersList)

    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                
                <tbody>
                    {usersList.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default Scores

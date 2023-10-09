import React, { useState } from 'react'

function Todolist() {
    const [data, setdata] = useState([])
    const [apple, setApple] = useState("")

    console.log(apple)
    return (
        <>
            <input
                type='text'
                placeholder='Todolist'
                value={apple}
                onChange={(e) => setApple(e.target.value)}
            />
            <button onClick={() => {
                setdata([...data, apple])
                setApple("")
            }
            }> Submit</button>



            {data.map((item) => {
                return (

                    <li> {item}</li>
                )
            })}
        </>
    )
}

export default Todolist;
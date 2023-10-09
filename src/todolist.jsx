import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai"
function Todolist() {
    const [data, setdata] = useState([])
    const [apple, setApple] = useState("")

    function handleData(id){
        const newData = data.filter((item)=>  item.id !== id)
        setdata(newData)
    }
    return (
        <>

            <input
                type='text'
                placeholder='Todolist'
                value={apple}
                onChange={(e) => setApple(e.target.value)}
            />
            <button onClick={() => {
                setdata([...data,{ id: Math.floor(Math.random() * 10000), value: apple }])
                setApple("")
            }
            }> Submit</button>
            <button onClick={() => {
                setdata([])

            }
            }> Clear All</button>



            {data.map((item) => {
                return (

                    <li> {item.value} <AiFillDelete color='red' onClick={()=>handleData(item.id)} /></li>
                )
            })}
        </>
    )
}

export default Todolist;
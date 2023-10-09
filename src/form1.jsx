import React, { useState } from 'react'
import Errorbox from './Errorbox'

function VAlidate() {
    const[errorbox, seterrorbox]=useState(false)
    const[errormsg ,seterrormsg]=useState("")
    const[name , setname]=useState("")
    const[email, setemail]=useState("")
    const[address, setaddress]=useState("")
    const[number,setnumber]=useState("")
    function Handelsubmit(e){
        e.preventDefault()
        if(!name || !email || !address || !number){
            seterrorbox(true)
            seterrormsg("Insufficient credential")
            setTimeout(()=>{
                seterrorbox(false)
            },2000) 
        }
    }
    return (
        <>
            <form>
                <input 
                type='text'
                placeholder='Name'
                onChange={(e)=>setname (e.target.value)}
                />
                <input 
                type='text'
                placeholder='Email'
                onChange={(e)=>setemail (e.target.value)}
                />
                <input 
                type='text'
                placeholder='Address'                
                onChange={(e)=>setaddress(e.target.value)}
                />
                <input 
                type='number'
                placeholder='phone number'
                onChange={(e)=>setnumber (e.target.value)}
                />
                <button onClick={(e)=>Handelsubmit(e)}> Submit </button>
            </form>
            {
                errorbox && <Errorbox prekshya={errormsg} kattuwal='green'/>
            }
        </>
    )
}

export default VAlidate;
import React, { useState } from 'react'

function Validation() {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [company, setcompany] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")

    const [alertText, setAlertText] = useState({
        name: "",
        age: ""
    })
    console.log(alert)
    function form(e) {
        e.preventDefault()
        if (!name.length) {
            alert("hi i am prekshya")
            // setAlert({ name: "Please insert value" })
            setAlertText({...alert, name: "Please insert value"})
        }
        // else {
        //     // e.submit()
        // }
        // if (age.length == 0) {
        //     setAlert("enter age in years")
        // }
        // if (company.length == 0) {
        //     setAlert("enter comapany name ")
        // }
        // if (email.length == 0) {
        //     setAlert("enter email please")
        // }
        // if (phone.length > 10) {
        //     setAlert("enter  correct phone number")
        // }
    }

    return (
        <div>
            <form>
                <input
                    placeholder='Name'
                    onInput={(e) => setname(e.target.value)}
                />
                <span>{alertText.name}</span>
                <input
                    placeholder='age'
                    onChange={(e) => setage(e.target.value)}
                />
                <span>{alertText.age}</span>
                <input
                    placeholder='company'
                    onChange={(e) => setcompany(e.target.value)}
                />
                <input
                    placeholder='email'
                    onChange={(e) => setemail(e.target.value)}
                />
                <input type='number' placeholder='phone number'
                    onChange={(e) => setphone(e.target.value)}
                />
                <button onClick={(e) => form(e)}>Submit</button>
            </form>
        </div>
    )
}

export default Validation;
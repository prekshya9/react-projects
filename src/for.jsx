import React, { useState } from 'react'
import { useEffect } from 'react';

function Try1() {
    const [look, setlook] = useState(2059);

    function increaseValue(){
        if(look == 2072){
            return
        }
        setTimeout(()=>{
            setlook(look+1)
        }, 1000)
    }
    increaseValue()
    return (<h1> I have completed school at {look}BS</h1>
    )
};


export default Try1;
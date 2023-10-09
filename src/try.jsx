import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

// function Practise() {
//     const [count , setcount] = useState(0);
//     const [calculation , setcalculation] = useState();

//     useEffect(() =>{
//         setcalculation(() => count * 3 )
//     },[count]);
//   return (
//    <>
//     <h1> Count:{count}</h1>
//     <button onClick={() => setcount ((p)=> p+1)}> click here</button>
//     <h1> Calculation : {calculation}</h1>
//     </>
//   )
// }

// export default Practise;


// function Demo() { 
//     const [demo , setdemo] = useState("");
//     const count = useRef(0);
      
//     useEffect(() => {
//        count.current = count.current + 1; 
//     });
//   return (
//    <>
//        <input
//           type='text'
//           value={ demo }
//          onChange ={(e) =>setdemo(e.target.demo)}
//        />
//         <h1> Rendercount : {count.current}</h1>
      
//    </>
//   );
// }

// export default Demo;

function Form() {
  const [name ,setname]=useState("")
  const [age , setage]= useState("")
  const [company, setcompany] =useState("")

  return (
    <>
    <form>
      <input 
      placeholder='Full Name'
      onChange={(e)=>setname(e.target.value)}
      />
      <input
      placeholder='Age'
      onChange={(e)=>setage(e.target.value)}
      />
      <input
      placeholder='company'
      onChange={(e)=>setcompany(e.target.value)}
      />
      <button> submit</button>
    </form>
    </>
  
  )
}

export default Form;

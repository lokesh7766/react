import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

const App = () => {
const [count,setCount] = useState(0);
const [total,settotal] = useState(1);

function Handleclick(){

  setCount(count + 1)
}
function handletotal() {
 settotal(total + 2)
}
// //v1
// useEffect(() => {
//  alert("i run everthime ")
//   }
// )

//v2
// useEffect(() => {
//   alert(" i will run onlyy one time ")


// }, [])
// v4
// useEffect(() => {
//   alert("count is updated")


// }, [count])



// useEffect(() => {
//   alert("updated")

// }, [count,total])
 useEffect(() => {
   alert('mount')
 
   return () => {
     alert('unmount ');
   }
 }, [count])
 


  return (
    //first is written part 
    //second one is clean up 

  
    
    <div>App
<p>  i am  count {count
  }</p>

        <button id="btn" onClick={Handleclick} >   click me </button>

        <button onClick={handletotal}>total </button>
    </div>
  )
}

export default App
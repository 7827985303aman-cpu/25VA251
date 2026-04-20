import React, { useEffect, useState } from 'react'
// import { Button, Alert } from 'react-bootstrap';

function UseEffect() {
const[counter,setCounter]=useState(0);

useEffect(()=>{
    setTimeout(()=>{
        setCounter((Counter)=>counter+1)
    },1000)
});

const[apiData, setApiData]=useState(null);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => setApiData(data.id));
},{});

  return (
    <>
    <h1>UseEffect Example: Self Counter</h1>
    <h2>{counter}</h2>
    <h3>API Title: {apiData}</h3>


    {/* <h2>UseEffect</h2>
    <p>
       The useEffect Hook allows you to perform side effects in your components.
       useEffect accepts two arguments. The second argument is optional.

        {/* useEffect(<function>, <dependency>) */}
    {/* </p>
    <h3>Timer {timer}</h3>
    
  <div className="d-flex flex-column align-items-center">
  <h3>Couter {count} </h3>
    <Button  onClick={() => setCount(count + 1)} variant="success" className='my-2 w-50'>+</Button>
    <Button  onClick={() => setCount(count - 1)} variant="secondary" className='my-2 w-50'>-</Button>
</div> */} 

    </>
  )
}

export default UseEffect
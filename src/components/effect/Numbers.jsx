import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Numbers = () => 
{
  const [counterOne, setCounterOne] = useState(1);
  const [counterTwo, setCounterTwo] = useState(1);

  
  useEffect(() => 
  {
    console.log("1- useEffect sin dependencias");
 
  })

  useEffect(() => 
  {

    console.log("2- useEffect con array vacío []");
 
  },[])

  useEffect(() => 
  {
    console.log("3- useEffect con depedencia [counterOne]");
 
  },[counterOne])
  
  useEffect(() => 
  {
    console.log("4- useEffect con depedencia [counterOne - counterTwo]");
 
  },[counterOne,counterTwo])
  

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Multiplicación y División Para 10 🐱‍👤🐺</h1>
        <hr />
        <div className="text-center">
        <h2 className="mt-4 mb-4">El valor del contador uno es: <span style={{color:"green"}}>{counterOne}</span></h2>
        <h2 className="mt-4 mb-4">El valor del contador dos es: <span style={{color:"red"}}>{counterTwo}</span></h2>
        <button className="btn btn-success" onClick={()=>setCounterOne(counterOne * 10)}>Multiplicar por 10</button>
        <button className="btn btn-danger ms-2" onClick={()=>{setCounterTwo(counterTwo / 10)}}>Dividir por 10</button>
        </div>
      </div>
    </>
  )
}

export default Numbers


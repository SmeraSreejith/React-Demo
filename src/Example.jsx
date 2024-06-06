import React, { useState } from 'react'

function Example({sub,age}) {

  const[concept ,SetConcept]=useState("react.js")
  console.log(concept);

  console.log({sub});

  //function without argument
  const buttonclick = ()=>{
    alert('button clicked')
  }

  //function with argument
   const addUser = (uname)=>{
    alert(`${uname} addeed successfully`)
   }

   const getName =(e)=>{
    console.log(e.target.value);
   }

  return (
    <>
      <div>Example</div>
     {
      sub=='REACT'?
      <p className='text-primary '>Data shared is : {sub}</p>:
      <p className='text-danger fs-3 fw-bolder'>Data shared is not react</p>
     }
     {age==27 &&
      <p className='text-success fs-3'>Data shared is : {age}</p>
      }
      
        <p>concepts initial value is : {concept}</p>
        <button className='btn btn-dark me-2' onClick={()=>SetConcept('nest.js')}>click</button>

       <button className='btn btn-success' onClick={buttonclick}>Click</button>
       <button className='btn btn-primary ms-2' onClick={()=>addUser('Kevin')}>Add</button>


       <div className='d-flex mt-4'>
        <input type="text" placeholder='course' className='form-control w-25'onChange={(e)=>getName(e)} />
        
       </div>
    </>
  )
}

export default Example
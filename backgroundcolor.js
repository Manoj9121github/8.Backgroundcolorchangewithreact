import React,{useState} from 'react'

export default function Backgroundcolor() {

    const [color,setColor]=useState(' ')
    
  return (
    <div  style={{backgroundColor:color}} >

<div    className='container'>
    <button  onClick={()=>{
        setColor('red')
        
    }}>Red</button>
 
    <button onClick={()=>{
        setColor('green')
    }}>Green</button>

    <button onClick={()=>{
        setColor('yellow')
    }}>yellow</button>

    <button onClick={()=>{
        setColor('aqua')
    }}>Aqua</button>

    </div>
      
    </div>
  )
}

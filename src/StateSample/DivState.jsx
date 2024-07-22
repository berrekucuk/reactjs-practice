import React, { useState } from 'react'

function DivState() {

    const [changecolor, setchangecolor] = useState("black")

    const color = () => {
        setchangecolor("red")
    }
    
  return <>
    <button onClick={color}>Change Color</button>
    <div style={{display:"flex"}}>
        <div style={{width:300, height:300,marginRight:"50px",marginLeft:"10px", backgroundColor:changecolor}}></div>
        <div style={{width:300, height:300,backgroundColor: changecolor}}></div>
    </div>
  </>
}

export default DivState
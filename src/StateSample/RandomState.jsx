import React, { useState } from 'react'

function RandomState() {

    const [random, setrandom] = useState(0)

    const start = () => {
        var randomNumber = Math.floor(Math.random()*1000)
        setrandom(randomNumber)
    }
  return <>
    <button onClick={start}>Random Width - Height</button>
    <hr/>
    <div style={{width: random, height: random, backgroundColor: 'lightgrey'}}></div>
  </>
}

export default RandomState
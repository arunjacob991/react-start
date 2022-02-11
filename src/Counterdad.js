import React from 'react'
import Counter from './Counter'
import Tags from './Tags'
import { useState } from 'react'


export default function Counterdad() {

    const [state, setState] = useState(false);

  return (
      <>
        <div style={{color: "red", fontSize: "20px"}}>Counterdad</div>
        <button onClick={() => setState(!state)}>Show/Hide</button>
        { state && <Counter /> }

        <Tags />
      </>
  )
}


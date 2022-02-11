import './App.css'
import Yoyo from './Yoyo'
import Counterdad from './Counterdad'
import { useState } from 'react'

function App() {

  const data = "props data";

  const [state, setState] = useState(0);

  const addCount = () => {
    setState(state + 1);
  }

  let obj = {
    hoyya : "First: ",
    state
  }

  return (
    <div>
       
       <button onClick={addCount}>Add count</button>
        <Yoyo {...obj} />
        <Yoyo hoyya = "Second: " state = { state } />
        <Counterdad />
    </div>
  );
}

export default App;


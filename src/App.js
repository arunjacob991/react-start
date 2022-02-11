import './App.css'
import Yoyo from './Yoyo'

function App() {

  const data = "props data";

  return (
    <div>
        <h1 className="demo">Helloi worrrld....</h1>
        <h1>yyooo..... {data}</h1>

        <Yoyo content = {`sdfkjhdhkdhjkdhdhka`}/>
       
        

    </div>
  );
}

export default App;


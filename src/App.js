
import { useState } from "react";
import About from "./components/about";
import Indice from "./components/indice";
function App() {
  
const [counter,setCounter]=useState(0);
const [message,setMessage]=useState('');
const incrementCounter=()=>
{
  if(counter<10)
  {
  setCounter(counter+1);
  setMessage('')
  }
  else
  setMessage("le compteur ne doit pas dépassé les 10")
}
const decrementCounter=()=>
{
  if(counter>0)
  {
  setCounter(counter-1)
  setMessage('')
  }
  else
  setMessage("le compteur ne doit pas être négatif")
}

  return (
    <>
    <div class="container text-center">
  <div class="row">
    <div class="col">
      
    </div>
    <div class="col">
    <h2>Bienvenu à mon application</h2>
    <About></About>
    <button className="btn btn-success" onClick={incrementCounter}>+</button>
    &nbsp; {counter} &nbsp;
    <button className="btn btn-danger" onClick={decrementCounter}>-</button>
    <br />
    {message}
    <br></br>
    <Indice></Indice>
    </div>
    <div class="col">
      
    </div>
  </div>
</div>
    
    </>
  
  );
}

export default App;

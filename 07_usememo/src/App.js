import React, { useState, useMemo} from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import './App.css';

function App() {

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const incrementA = () => {
    setCountA(countA + 1);
  };
  const incrementB = () => {
    setCountB(countB + 1);
  };

  //Se usa para evitar que se renderice cada vez que se incrementa el contador
  const memoComponentA = useMemo(() => {
    return <ComponentA count={countA}/>
  },[countA])//Solo renderiza nuevamente por el cambio en "countA"

  return (
    <div className="App">
      App js count A : {countA}
      <p>
        {/* Renderiza solo cuando cambia countA como esta especificado en "useMemo" */}
        <button onClick={incrementA}>increment A</button>
      </p>
      App js count B : {countB}
      <p>
        <button onClick={incrementB}>increment B</button>
      </p>
      {memoComponentA}
      <p></p>
      {/* Renderiza cuando cambia cualquier contador */}
      <ComponentB count={countB}/> 
    </div>
  );
}

export default App;

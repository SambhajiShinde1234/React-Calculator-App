import React, { useState } from 'react';
import './App.css';

function App() {

const [result, setResult] = useState('');

const handleClick = (event) => {

  // ----------- Code for handling the error when user try to type two consecutive operators 
  // at that time last entered operator will get removed using 'slice()' ------------

  const operator = event.target.name;
  
  if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
    const lastChar = result[result.length - 1];
    
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      setResult(result.slice(0, -1).concat(operator));
      return;
    }
  }
  
  setResult(result.concat(operator));

  // setResult(result.concat(event.target.name));
  
}
 
// ----------- Code for erasing the input ------------- //

const handleErase = () => {
  setResult("");
}

// ----------- Code for clearing the input ------------- //

const handleClear = () => {
  setResult(result.slice(0, -1));
}

// ----------- Code for calculate the result ------------- //

const handleCalculate = () => {

// ------------- this condition check whether 'result' state is empty or not if it is empty then it sets the 'setResult'
//   state to an empty string and 'return' without calling 'eval()' else it will perform 'eval()' -----------

  if (result.trim() === "" || result.trim() === "Error") {
    setResult("");
    return;
  }

  try {
    setResult(eval(result).toString());
  }catch(error) {
    setResult("Error");
  }

}
 
// ----------- body section ------------- //

  return (
    <>
      <div className='container'>
        <form>
          <input type = 'text' value = {result} />
        </form>

        <div className='keys'>
          <button onClick = {handleErase} id = "clear" className = 'highlight'> clear </button>
          <button onClick = {handleClear} className = 'highlight'> c </button>
          <button name = "*" onClick = {handleClick} className = 'highlight'> * </button>
          <button name = "/" onClick = {handleClick} className = 'highlight'> / </button>

          <button name = "1" onClick = {handleClick} > 1 </button>
          <button name = "2" onClick = {handleClick} > 2 </button> 
          <button name = "3" onClick = {handleClick} > 3 </button> 
          <button name = "+" onClick = {handleClick} className = 'highlight'> + </button>

          <button name = "4" onClick = {handleClick} > 4 </button> 
          <button name = "5" onClick = {handleClick} > 5 </button>
          <button name = "6" onClick = {handleClick} > 6 </button>
          <button name = "-" onClick = {handleClick} className = 'highlight'> - </button>

          <button name = "7" onClick = {handleClick} > 7 </button> 
          <button name = "8" onClick = {handleClick} > 8 </button>
          <button name = "9" onClick = {handleClick} > 9 </button>
          <button name = "." onClick = {handleClick} className = 'highlight'> . </button>

          <button name = "0" onClick = {handleClick} > 0 </button>
          <button onClick = {handleCalculate} id = "equal" className = 'highlight'> = </button>
        </div>
      </div>
    </>
  );
}

export default App;

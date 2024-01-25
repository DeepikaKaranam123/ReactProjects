import React, {useState} from 'react';

import './App.css';

function App() {
  const [value,setValue] = useState('')
  return(
   <div className='container'>
    <div className='calculator'>
      <form action=''>
        <div className='display'>
          <input type='text' value={value}/>
        </div>
        <div>
          <input type='button' value="AC"  onClick={a=>setValue('')} />
          <input type='button' value="DE"  onClick={a=>setValue(value.slice(0,-1))}/>
          <input type='button' value="."  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="/"  onClick={a=>setValue(value + a.target.value)}/>
        </div>
        <div>
          <input type='button' value="7" onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="8"  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="9"  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="*"  onClick={a=>setValue(value + a.target.value)}/>
        </div>
        <div>
          <input type='button' value="4"  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="5"  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="6"  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="+"  onClick={a=>setValue(value + a.target.value)}/>
        </div>
        <div>
          <input type='button' value="1"  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="2"  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="3"  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="-"  onClick={a=>setValue(value + a.target.value)}/>
        </div>
        <div>
          <input type='button' value="00"  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="0"  onClick={a=>setValue(value + a.target.value)}/>
          <input type='button' value="=" className='equal'  onClick={a=>setValue(eval(value))}/>
        </div>
      </form>
    </div>
   </div>

  )
}

export default App;

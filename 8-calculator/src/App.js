import { useState } from 'react';
import Display from './components/Display';
import ButtonGroup from './components/ButtonGroup'
import './App.css';

function App() {
  const [input, setInput] = useState(0);

  const displayChange = (val) => {
    let temp = input;
    setInput(`${temp}`+`${val}`)
  }

  return (
    <div className="App">
      <div className="App_body">
        <Display value={input}/>
        <ButtonGroup addProcess={displayChange}/>
      </div>
    </div>
  );
}

export default App;

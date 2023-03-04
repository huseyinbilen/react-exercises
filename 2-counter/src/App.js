import { useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const sub_count = () => {
    let temp = count-1;
    setCount(temp);
  }

  const add_count = () => {
    let temp = count+1;
    setCount(temp);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button id="sub_count" onClick={sub_count}>-</button>
      <button id="add_count" onClick={add_count}>+</button>
    </div>
  );
}

export default App;

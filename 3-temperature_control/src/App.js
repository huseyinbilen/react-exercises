import { useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('neutral');

  const sub_count = () => {
    let temp = count-1;
    setCount(temp);
    temperatureControl();
  }

  const add_count = () => {
    let temp = count+1;
    setCount(temp);
    temperatureControl();
  }

  const temperatureControl = () => {
    if(count <= -5) setColor('cold');
    else if(count > -5 && count <=5) setColor('neutral');
    else if(count > 5) setColor('hot');
  }

  return (
    <div className={`App ${color}`}>
      <h1 >{count}°C</h1>
      <button id="sub_count" onClick={sub_count}>-</button>
      <button id="add_count" onClick={add_count}>+</button>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [something, setSomething] = useState('World');

  return (
    <div className="App">
      <header className="App-header">
        <h1 onMouseOver={()=>setSomething('React')} onMouseOut={()=>setSomething('World')}>Hello {something}!</h1>
      </header>
    </div>
  );
}

export default App;

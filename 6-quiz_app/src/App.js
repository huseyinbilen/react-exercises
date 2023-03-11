import Card from './components/Card';
import data from './data/DataSource';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card question={data} />
    </div>
  );
}

export default App;

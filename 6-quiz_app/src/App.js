import Card from './components/Card';
import data from './data/DataSource';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card items={data} />
    </div>
  );
}

export default App;

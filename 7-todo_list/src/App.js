import NewItem from './components/NewItem';
import ItemList from './components/ItemList';
import data from './data/DataSource';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App_body">
        <NewItem />
        <br/>
        <ItemList items={data} />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import NewItem from './components/NewItem';
import ItemList from './components/ItemList';
import data from './data/DataSource';
import './App.css';

function App() {
  const [items, setItems] = useState(data);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  };
  
  return (
    <div className="App">
      <div className="App_body">
        <NewItem onAddItem={addItemHandler}/>
        <br/>
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default App;

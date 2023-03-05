import { useState } from "react";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import "./App.css";
import person from "./data/DataSource";

function App() {
  const [persons, setPersons] = useState(person);

  const filterHandler = (items) => {
    setPersons(items);
  };

  return (
    <div className="App">
      <div className="App_body">
        <SearchBar refresh={filterHandler}/>
        <List items={persons}/>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import data from "../data/DataSource";
import "./NewItem.css";

function NewItem(props) {
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let key = data.length+1;
    
    const todoData = {
      id: key,
      text: input,
      date: new Date(),
    };

    props.onAddItem(todoData);
    setInput("");
  }

  return (
    <div className="newitem_body flex">
      <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={inputHandler} className="flex-1"></input>
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg px-5 py-2.5"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default NewItem;

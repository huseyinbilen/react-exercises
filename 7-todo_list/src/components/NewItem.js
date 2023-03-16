import "./NewItem.css";

function NewItem() {
  return (
    <div className="newitem_body flex">
      <input type="text" className="flex-1"></input>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg px-5 py-2.5">ADD</button>
    </div>
  );
}

export default NewItem;

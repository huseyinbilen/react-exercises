import "./SearchBar.css";

import person from "../data/DataSource";

function SearchBar(props) {

  const changeHandler = (event) => {
    event.preventDefault();

    let personFilter = [];

    person.map((item) => {
      if (item.first_name.toLowerCase().startsWith(event.target.value)) {
        personFilter.push(item);
      }
      return props.refresh(personFilter);
    });
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} placeHolder="Search..." />
    </div>
  );
}

export default SearchBar;

import './List.css';
function List(props) {
  return (
    <div>
      <ul>
        {props.items.map((person) => (
          <li>{`${person.first_name} ${person.last_name}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;

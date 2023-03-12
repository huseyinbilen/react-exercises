import "./Option.css";

function Option(props) {
  const clickHandler = (event) => {
    props.next(event.target.innerText);
  };

  return (
    <div className={`option_body`} onClick={clickHandler}>
      <h4>{props.items}</h4>
    </div>
  );
}

export default Option;

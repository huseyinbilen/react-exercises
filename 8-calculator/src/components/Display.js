import './Display.css';
function Display(props) {
    return (
        <div className="display">
            <input type="text" id="display" value={props.value}/>
        </div>
    );
}

export default Display;
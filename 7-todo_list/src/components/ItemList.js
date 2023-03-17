import './ItemList.css';

function ItemList(props) {
    return (
        <div>
            <ul>
                {props.items.map((element, index) => (
                    <li key={index} className="text-left">
                        <input type="checkbox" value={element} className="text-3xl"/>
                        <label>{element.text}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ItemList;
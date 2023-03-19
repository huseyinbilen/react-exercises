function Button(props) {
    const clickHandler = (event) => {
        let key = event.target.innerHTML;
        let input = document.getElementById("display");
        if(input.value == 0) input.value = key;
        else input.value += key;
    }
    return (
        <button type="button" onClick={clickHandler} className={`${props.color}  border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 font-medium text-sm px-5 py-2.5  dark:text-white dark:border-gray-600 dark:hover:border-gray-600`}>{props.value}</button>
    );
}

export default Button;
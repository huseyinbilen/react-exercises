function Button(props) {
    return (
        <button type="button" class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">{props.value}</button>
    );
}

export default Button;
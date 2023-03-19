import Button from './Button';
import './ButtonGroup.css';

function ButtonGroup() {
    return (
        <div className="btn_group_body">
            <Button value={"AC"} color={"dark:bg-blue-800 dark:hover:bg-gray-700"}/>
            <Button value={"±"} color={"dark:bg-blue-800 dark:hover:bg-gray-700"}/>
            <Button value={"%"} color={"dark:bg-blue-800 dark:hover:bg-gray-700"}/>
            <Button value={"÷"} color={"dark:bg-yellow-700 dark:hover:bg-yellow-900"}/>
            <Button value={7} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={8} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={9} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={"X"} color={"dark:bg-yellow-700 dark:hover:bg-yellow-900"}/>
            <Button value={4} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={5} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={6} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={"-"} color={"dark:bg-yellow-700 dark:hover:bg-yellow-900"}/>
            <Button value={1} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={2} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={3} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={"+"} color={"dark:bg-yellow-700 dark:hover:bg-yellow-900"}/>
            <Button value={0} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={"00"} color={"dark:bg-gray-800 dark:hover:bg-gray-700"}/>
            <Button value={","} color={"dark:bg-blue-800 dark:hover:bg-gray-700"}/>
            <Button value={"="} color={"dark:bg-yellow-700 dark:hover:bg-yellow-900"}/>

        </div>
    );
}

export default ButtonGroup;
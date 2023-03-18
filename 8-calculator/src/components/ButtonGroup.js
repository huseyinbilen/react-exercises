import Button from './Button';
import './ButtonGroup.css';

function ButtonGroup() {
    return (
        <div className="btn_group_body">
            <Button value={"AC"}/>
            <Button value={"±"}/>
            <Button value={"%"}/>
            <Button value={"÷"}/>
            <Button value={7}/>
            <Button value={8}/>
            <Button value={9}/>
            <Button value={"X"}/>
            <Button value={4}/>
            <Button value={5}/>
            <Button value={6}/>
            <Button value={"-"}/>
            <Button value={1}/>
            <Button value={2}/>
            <Button value={3}/>
            <Button value={"+"}/>
            <Button value={0}/>
            <Button value={","}/>
            <Button value={"="}/>

        </div>
    );
}

export default ButtonGroup;
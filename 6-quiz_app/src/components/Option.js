import { useState } from 'react';
import './Option.css';

function Option() {
    const [click, setClick] = useState('');

    const clickHandler = (event) => {
        if(click === 'clicked') setClick('');
        else setClick('clicked');
    };

    return (
        <div className={`option_body ${click}`} onClick={clickHandler}>
            <h4><span>A.</span>asdad</h4>
        </div>
    );
}

export default Option;
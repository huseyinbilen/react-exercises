import Option from './Option';
import './Card.css';

function Card() {
    return (
        <div className="card_body">
            <h3>Lorem Ipsum Dolor Sit Amet?</h3>
            <Option />
            <Option />
            <Option />
            <Option />
            <button>Next</button>
        </div>
    );
}

export default Card;
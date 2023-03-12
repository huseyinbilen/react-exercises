import { useState } from "react";
import Option from "./Option";
import Result from "./Result";
import "./Card.css";

let userAnswer = [];

function Card(props) {
  const [question, setQuestion] = useState(0);
  const [section, setSection] = useState("test");

  const nextQuestion = (ans) => {
    userAnswer.push(ans);

    let temp = question;
    if (temp < props.items.length - 1) {
      setQuestion(++temp);
    } else {
      setSection("result");
    }
    return userAnswer;
  };

  return (
    <div className="card_body">
      {section === "test" ? (
        <div>
          <h3>{props.items[question].question}</h3>
          {props.items[question].option.map((opt) => (
            <Option items={opt} next={nextQuestion} />
          ))}
        </div>
      ) : (
        <div>
          <Result answer={userAnswer} />
        </div>
      )}
    </div>
  );
}

export default Card;

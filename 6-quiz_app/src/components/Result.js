import data from "../data/DataSource";
import "./Result.css";

function Result(props) {
  let trueAnswer = 0;
  let falseAnswer = 0;

  const compareAnswer = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].answer === props.answer[i]) {
        ++trueAnswer;
      } else {
        ++falseAnswer;
      }
    }
  };

  compareAnswer();

  return (
    <div className="result_body">
      <h2>Result</h2>
      <p>
        True: {trueAnswer} False: {falseAnswer}
      </p>
    </div>
  );
}

export default Result;

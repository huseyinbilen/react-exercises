import { useState } from 'react';
import "./Login.css";

function Login() {
  const [warn, setWarn] = useState('Please Login');
  const [warnClass, setWarnClass] = useState('');

  const submitHandler = (event) => {
    // event.preventDefault();
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(event.target[0].value)) {
      event.preventDefault();
      setWarn("E-mail is not valid!");
      setWarnClass("warn");
    } else if (event.target[1].value.length < 6) {
      event.preventDefault();
      setWarn("Password must be greater than six characther");
      setWarnClass("warn");
    } else {
      console.log("You are succesfully Login.");
    }
  };

  return (
    <div className="form_body">
      <form onSubmit={submitHandler}>
        <h6 className={`${warnClass}`}>{warn}</h6>
        <input type="text" name="email" placeholder="Email" />
        <br />
        <input type="password" name="pass" placeholder="Pass" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValue.password.trim().length < 6;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredValue);
  }

  function handleChange(identifier, newValue) {
    setEnteredValue((prevValue) => {
      return {
        ...prevValue,
        [identifier]: newValue,
      };
    });

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleChange("email", e.target.value)}
          value={enteredValue.email}
          error={emailIsInvalid && "Please enter a valid emai!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleChange("password", e.target.value)}
          value={enteredValue.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

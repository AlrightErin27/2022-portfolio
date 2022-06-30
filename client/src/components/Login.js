import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import CreateAccountForm from "./CreateAccountForm";

function Login() {
  const [isNew, setIsNew] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const history = useHistory();

  function handleForms(user) {
    console.log("User Object", user);
    history.push("/arcade");
  }
  function toggle() {
    setShowCreateAccount(!showCreateAccount);
    showCreateAccount === true
      ? history.push("/create_account")
      : history.push("/login");
  }
  console.log("New account? ", isNew);
  return (
    <>
      <NavBar />
      <div className="forms">
        {showCreateAccount === false ? (
          <div className="two-form-cont">
            <LoginForm handleForms={handleForms} setIsNew={setIsNew} />

            <button onClick={toggle}>Create New Account</button>
          </div>
        ) : (
          <div className="two-form-cont">
            <CreateAccountForm handleForms={handleForms} setIsNew={setIsNew} />

            <button onClick={toggle}>Back To Login</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;

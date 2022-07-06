import { useState } from "react";
import LoginForm from "./LoginForm";

import CreateAccountForm from "./CreateAccountForm";

function Login({ setUser }) {
  const [newAccount, setNewAccount] = useState(false);

  function handleNewAccount() {
    setNewAccount(true);
  }

  // ------------ FETCH AREA ------------ //
  return (
    <>
      <div className="forms">
        <div className="two-form-cont">
          <LoginForm setUser={setUser} />
          {newAccount === false ? (
            <button onClick={handleNewAccount}>Create New Account</button>
          ) : (
            <CreateAccountForm
              setNewAccount={setNewAccount}
              setUser={setUser}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Login;

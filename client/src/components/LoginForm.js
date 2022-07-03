import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ handleForms, setIsNew, setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };

    // -------------- FETCH ------------ //
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          console.log("USER:", user.name);
          history.push("/arcade");
        });
      } else {
        res.json().then((json) => setError(json.error, error));
        alert("Incorrect Input");
      }
    });
    // -------------- FETCH ------------ //
  }

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <h2>Log In</h2>

      <div className="eform-section">
        {/*  // ~~~🧀 Name Input 🧀~~~ //  */}
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="eform-section">
        {/*  // ~~~🧇 Email Input 🧇~~~ //  */}
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="eform-section">
        {/*  // ~~~🍦 Password Input 🍦~~~ //  */}
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="eform-btn"></div>
      {/*  // ~~~🥨 Submit Button 🥨~~~ //  */}
      <button type="submit">Enter</button>
    </form>
  );
}

export default LoginForm;

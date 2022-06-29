import React, { useState } from "react";

function LoginForm({ handleForms, setIsNew }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const reEntryUser = {
      username,
      email,
      password,
    };
    // console.log("Re-entry User Object:", reEntryUser);
    setIsNew(false);
    handleForms(reEntryUser);
  }

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <h2>Log In</h2>

      <div className="eform-section">
        {/*  // ~~~🧀 Name Input 🧀~~~ //  */}
        <label>Name:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

      <div className="eform-btn">
        {/*  // ~~~🥨 Submit Button 🥨~~~ //  */}
        <button type="submit">Enter</button>
      </div>
    </form>
  );
}

export default LoginForm;
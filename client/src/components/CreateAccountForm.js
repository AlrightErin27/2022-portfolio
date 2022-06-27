import React, { useState } from "react";

function CreateAccountForm({ handleForms, setIsNew }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIsNew(true);
    const createdUser = {
      username,
      email,
      password,
    };
    // console.log("Created User Object:", createdUser);

    handleForms(createdUser);
  }

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <h2>Create Account</h2>

      <div className="eform-section">
        {/*  // ~~~🧀 Create Name Input 🧀~~~ //  */}
        <label>Name:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="eform-section">
        {/*  // ~~~🧇 Create Email Input 🧇~~~ //  */}
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="eform-section">
        {/*  // ~~~🍦 Create Password Input 🍦~~~ //  */}
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="eform-btn">
        {/*  // ~~~🥨 Create Account Submit Button 🥨~~~ //  */}
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
}

export default CreateAccountForm;

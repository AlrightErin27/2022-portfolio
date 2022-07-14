import { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateAccountForm({ setUser, setNewAccount }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState();
  const [error, setError] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    // ---------------------- FETCH ---------------------- //
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((newUser) => {
        console.log("Successfully added user:", newUser);
        setSuccess(true);

        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }).then((res) => {
          if (res.ok) {
            res.json().then((newUser) => {
              setUser(newUser);
              console.log("USER:", newUser.name);
              history.push("/arcade");
            });
          } else {
            res.json().then((json) => setError(json.error, error));
            console.log(success, "Did not post new user to backend");
            alert(newUser.errors);
          }
        });
      })
      .catch((error) => {
        console.error("Error adding new user:", error);
        setSuccess(false);
      });
  }

  return (
    <div className="ca-cont">
      <form onSubmit={handleSubmit} className="entry-form">
        <h2>Create Account</h2>

        <div className="eform-section">
          {/*  // ~~~🧀 Create Name Input 🧀~~~ //  */}
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="eform-btn">
          {/*  // ~~~🥨 Create Account Submit Button 🥨~~~ //  */}
          <button type="submit">Create Account</button>
        </div>
        <button onClick={() => setNewAccount(false)}>Back</button>
      </form>
    </div>
  );
}

export default CreateAccountForm;

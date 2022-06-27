import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// ~~~~⭐️~~~~~~~~~~🌜~~~~ 🌞 Components 🌞 ~~~~🌛~~~~~~~~~~⭐️~~~~ //
import Login from "./components/Login";
import Home from "./components/Home";
import Logout from "./components/Logout";
// ~~~~⭐️~~~~~~~~~~🌜~~~~ 🌞 ~~~~~~~~~~ 🌞 ~~~~🌛~~~~~~~~~~⭐️~~~~ //

function App() {
  // SET USER INTO STATE

  // FETCH GET /me FROM SESSION CONTROLLER

  return (
    <>
      <Router>
        <Switch>
          {""}
          {/*  // ~~~🍏 Route to Login 🍏~~~ //  */}
          <Route path="/login">
            <Login />
          </Route>
          {""}
          {/*  // ~~~🍌 Route to Home 🍌~~~ //  */}
          <Route path="/home">
            <Home />
          </Route>
          {""}
          {/*  // ~~~🍎 Route to Logout 🍎~~~ //  */}

          <Route path="/logout">
            <Logout />
          </Route>
          {""}
          {/*  // ~~~🍍 Redirect to Login 🍍~~~ //  */}
          <Redirect to="/login"></Redirect>
          {""}
        </Switch>
      </Router>
    </>
  );
}

export default App;

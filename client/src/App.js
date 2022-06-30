import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// ~~~~⭐️~~~~~~~~~~🌜~~~~ 🌞 Components 🌞 ~~~~🌛~~~~~~~~~~⭐️~~~~ //
import Login from "./components/Login";
import Home from "./components/Home";
import Arcade from "./components/Arcade";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Logout from "./components/Logout";
import CreateAccount from "./components/CreateAccountForm";
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

          {/*  // ~~~🍉 Route to Resume 🍉~~~ //  */}
          <Route path="/resume">
            <Resume />
          </Route>
          {""}

          {/*  // ~~~🍌 Route to Home 🍌~~~ //  */}
          <Route path="/home">
            <Home />
          </Route>
          {""}

          {/*  // ~~~🍑 Route to Arcade 🍑~~~ //  */}
          <Route path="/arcade">
            <Arcade />
          </Route>
          {""}

          {/*  // ~~~🥝 Route to Projects 🥝~~~ //  */}
          <Route path="/projects">
            <Projects />
          </Route>
          {""}

          {/*  // ~~~🍎 Route to Logout 🍎~~~ //  */}
          <Route path="/logout">
            <Logout />
          </Route>
          {""}

          {/*  // ~~~🫐 Route to Create Account 🫐~~~ //  */}
          <Route path="/create_account">
            <CreateAccount />
          </Route>
          {""}

          {/*  // ~~~🍍 Redirect to Login 🍍~~~ //  */}
          <Redirect to="/home"></Redirect>
          {""}
        </Switch>
      </Router>
    </>
  );
}

export default App;

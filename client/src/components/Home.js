import { useHistory } from "react-router-dom";
import ErinLogo from "../imgs/erinlogo.png";

function Home() {
  const history = useHistory();
  return (
    <>
      <div className="home">
        {/*~~~~~~~~~~~~~~~~ HEADER ~~~~~~~~~~~~~~~~*/}

        <div className="h-header">
          Welcome to <p className="h-name">Erin Van Brunt's</p> Portfolio
        </div>
        {/*~~~~~~~~~~~~~~~~ ABOUT  ~~~~~~~~~~~~~~~~*/}

        <p className="h-about">
          Capstone Project for Flatiron's Full Stack Software Engineering
          Program
        </p>

        <div className="h-lower-pg">
          <div className="h-logo-cont" onClick={console.log("clicked")}>
            <img
              src={ErinLogo}
              alt="EVB logo"
              className="rotate linear infinite"
            />
          </div>

          <ul>
            <label> APP created with:</label>
            <li>React.js | </li>
            <li>Ruby on Rails | </li>
            <li>Javascript | </li>
            <li>RESTful Routes | </li>
            <li>CSS | </li>
            <li>React Router Dom | </li>
            <li>HTML | </li>
            <li>JSX | </li>
            <li>JSON API | </li>
            <li>Authorization | </li>
            <li>MVC Architecture | </li>
            <li>Redux | </li>
            <li>PostgresSQL DB | </li>
            <li>Validations | </li>
            <li>Heroku Deployment | </li>
            <li>Github | </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;

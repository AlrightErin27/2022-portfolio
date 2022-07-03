import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
// import CreateAccountForm from "./CreateAccountForm";

function Login({ setUser }) {
  // ------------ FETCH AREA ------------ //
  return (
    <>
      <NavBar />
      <div className="forms">
        <div className="two-form-cont">
          <LoginForm setUser={setUser} />
        </div>

        <div className="two-form-cont">{/* <CreateAccountForm /> */}</div>
      </div>
    </>
  );
}

export default Login;

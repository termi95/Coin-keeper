import { Link } from "react-router-dom";
import logo from "../../assets/piggy-bank.svg";
import style from "./Login.module.css";
import UseLogin from "./UseLogin";

function Login() {
  const { HandleSubmit, loginInput, passwordInput } = UseLogin();
  return (
    <>
      <main className="center container">
        <form
          action=""
          method="post"
          className={style.loginForm}
          onSubmit={HandleSubmit}
        >
          <div className="center">
            <img src={logo} alt="logo" className={style.logo + " center"} />
            <p className="t100 t-center">Coin Keeper</p>
          </div>
          <label className="t60">
            Login:
            <input ref={loginInput} type="text" name="Login" />
          </label>
          <label className="t60">
            Password:
            <input ref={passwordInput} type="Password" name="Password" />
          </label>
          <button type="submit" className="pointer t20">
            Login
          </button>
          <p className="t60 t-center">
            Don't have an account? <br />
            <Link to={"/register"}>
              <span className="t-white pointer">Sign up</span>
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}

export default Login;

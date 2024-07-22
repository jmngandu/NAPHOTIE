import { Form, Link } from "react-router-dom";
import VerifyHuman from "./VerifyHuman";
export default function Login() {
  return (
    <>
      <div className="login-page">
        <h3>Sign in to NAPHOTIE</h3>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
        <VerifyHuman />
        <button type="submit">
          <Link to="/Home">Sign in</Link>
        </button>
        <p>
          <Link>create account</Link>
        </p>
      </div>
    </>
  );
}

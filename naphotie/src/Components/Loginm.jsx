import { Form, Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="login-page">
        <h3>Login to NAPHOTIE</h3>

        <button>
          <Link to="/Home">login</Link>
        </button>
      </div>
    </>
  );
}

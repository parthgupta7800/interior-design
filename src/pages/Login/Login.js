import { Link } from "react-router-dom";
import "./styles.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h1 className="title">Login</h1>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p className="text">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="link">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

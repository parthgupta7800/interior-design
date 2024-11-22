import { Link } from "react-router-dom";
import "./styles.css";

const Register = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h1 className="title">Register</h1>
        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
        <p className="text">
          Already have an account?{" "}
          <Link to="/login" className="link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

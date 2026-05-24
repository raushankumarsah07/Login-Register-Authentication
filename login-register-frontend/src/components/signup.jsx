import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  console.log(name);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/register', { name, email, password })
      .then((result) => {console.log(result)
        navigate("/login")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signin-form">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal text-center fw-bold">Register</h1>

        <div className="form-floating m-1 w-100 p-1">
          <input
            type="text"
            name="name"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingInput">Enter Name</label>
        </div>
        <div className="form-floating m-1 w-100 p-1">
          <input
            type="email"
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating m-1 w-100 p-1">
          <input
            type="password"
            name="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-success m-1 w-100 p-1" type="submit">
          Register
        </button>

        <p className=" m-2 text-body-secondary">Already Have an Account</p>
      </form>
      <Link
        to="/login"
        className="btn btn-secondary m-1 w-100 p-1"
        type="submit"
      >
        Log in
      </Link>
    </div>
  );
}

export default Signup;

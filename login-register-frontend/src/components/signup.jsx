function Signup() {
  return (
    <div className="signin-form">
      <form>
        <h1 className="h3 mb-3 fw-normal text-center fw-bold">Register</h1>

        <div className="form-floating m-1 w-100 p-1">
          <input
            type="email"
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
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
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-success m-1 w-100 p-1" type="submit">
          Register
        </button>

        <p className=" m-2 text-body-secondary">Already Have an Account</p>
         <button className="btn btn-secondary m-1 w-100 p-1" type="submit">
          Log in
        </button>

      </form>
    </div>
  );
}

export default Signup;

import Signin from "./components/signin";
import Signup from "./components/signup";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/Signup">Register</Link>
        <Link to="/Signin">Log in</Link>
      </nav>
      <Routes>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

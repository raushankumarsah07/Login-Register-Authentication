import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


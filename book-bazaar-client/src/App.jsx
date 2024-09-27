import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import LoginForm from "./Login";
import Layout from "./Layout";
import SignUpForm from "./Signup";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route index element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
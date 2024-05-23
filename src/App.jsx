import Header from "./components/common/Header";
import NavBar from "./components/common/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Router>
  );
}

export default App;

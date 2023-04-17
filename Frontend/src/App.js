import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Diseases from "./Component/diseases";
import About from "./about";
import Home from "./home";
import Contact from "./contact";
import Dashboard from "./dashboard";

const App = () => {
 
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
    </BrowserRouter>
  );
}
export default App;
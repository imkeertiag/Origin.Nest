import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/About" ;
import { Contact } from "./pages/Contact" ;
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Services } from "./pages/Services";
import { Navbar } from "./Components/Navbar" ;
import { Footer } from "./Components/Footer" ;
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
const App = () => {
  return (
    <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/services" element={<Services />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="*" element={<Error/>} /> 
    {/* -> error 404 page , here '*' -> if any path not equal to above used path */}
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  );
};

export default App;
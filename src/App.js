import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" exact element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
         <Footer />       
      </Router>
    </div>
    
  );
}


export default App;

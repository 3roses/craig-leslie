
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <HashRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" exact element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </HashRouter>
    </div>
    
  );
}


export default App;

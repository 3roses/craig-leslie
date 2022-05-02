import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Footer />
    </div>
  );
}


export default App;

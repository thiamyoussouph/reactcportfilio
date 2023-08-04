import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/intro/Intro";
import "./App.css";
import Service from "./Components/Services/Service";
import Experience from "./Components/Experiences/Experience";
import Works from "./Components/Works/Works";

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intro/>
   <Service/>
   <Experience/>
   <Works/>
    </div>
  );
}

export default App;

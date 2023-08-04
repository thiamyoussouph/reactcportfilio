import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/intro/Intro";
import "./App.css";
import Service from "./Components/Services/Service";

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intro/>
   <Service/>
    </div>
  );
}

export default App;

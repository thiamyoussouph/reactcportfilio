import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/intro/Intro";
import "./App.css";
import Service from "./Components/Services/Service";
import Experience from "./Components/Experiences/Experience";

import Footer from "./Components/Footer/Footer";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"  style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
   <Navbar/>
   <Intro/>
   <Service/>
   <Experience/>
   <Works/>
   <Portfolio/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;

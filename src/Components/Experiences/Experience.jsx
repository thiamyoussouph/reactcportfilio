import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Experience.css'
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='Experience'>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>4+</div>
            <span style={{color: darkMode?'white':''}}>Ans  </span>
            <span >D'expérience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>17+</div>
            <span style={{color: darkMode?'white':''}}>Projets </span>
            <span>Achevés </span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>628+</div>
            <span style={{color: darkMode?'white':''}}> Personnes </span>
            <span>Formées</span>
        </div>
    </div>
  )
}

export default Experience
import React, { useContext } from "react";
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";



const Intro = () => {  
     const transition = { duration: 2, type: "spring" };
 

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>hy !! i am </span>
                    <span>Youssouph Thiam</span>
                    <span> Je suis un développeur full-stack, formateur, et j'accompagne les startups et les associations dans leur transformation digitale</span>
                </div>
                <button className='button i-button'> Collaborons </button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt=""width={450}style={{top:'-4%', left:'-21%'}}/>
                <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
                <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
                    <FloatingDiv image={crown} text1='Developpeur' text2=' Web'/>
                    </motion.div>
                    <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
                <FloatingDiv image={thumbup} text1='Best Dedign' text2=''/>
                </motion.div>
                <div className="blur" style={{background:"rba(236 210 255"}}></div>
                <div className="blur" style={{background:'#c1f5FF',top:'17rem',width:'21rem',
            height:'11rem',left:'-9'}}></div>
            </div>
        </div>
    )
}

export default Intro
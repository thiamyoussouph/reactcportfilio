import React, { useContext } from "react";
import './Service.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Cards/Card'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

import moncv from './moncv.pdf'
const Service = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };
    return (
        <div className='Services'>
            <div className="avesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awsone</span>
                <span>Services</span>
                <span>J'offre des solutions complètes de développement web full-stack 
                <br />  adaptées pour répondre à vos besoins spécifiques en entreprise
                    
                </span>

                <a href={moncv} download>
                    <button className="button s-button">Dowload CV</button>
                </a>
                <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>

            </div>
            <div className="cards">
            <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
                    <Card
                        emoji={HeartEmoji}
                        heading={'Front-end'}
                        detail={"Html,Css,Javascript,React, Angularr,Bootstrap,Tailwind  "}
                    />

</motion.div>
<motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
                    <Card
                        emoji={Glasses}
                        heading={'Back-end'}
                        detail={"Java,Php,Laravel,Spring boot,Uml, Merise,Sql,"}
                    />

</motion.div>
<motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
                    <Card
                        emoji={Humble}
                        heading={'coach'}
                        detail={"Enseignement actif et attentif, favorisant l'apprentissage par la pratique (pédagogie active)."}
                    />

</motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}>

                </div>
            </div>
        </div>
    )
}

export default Service
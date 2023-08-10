import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Youssouph</div>
                <Toggle />

            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                    
                        <li>
                        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                            Acceuil
                        </Link>
                        </li>
                       
                        
                        <li>
                        <Link to="Services" spy={true} smooth={true}>Services
                        </Link>
                        </li>
                        
                        <li>
                        <Link to="works" spy={true} smooth={true}>
                        Experiences
                        </Link>
                        </li>
                        <li><Link to="portfolio" spy={true} smooth={true}>
                            Portefolio
                            </Link>
                            </li>
                            
                            
                           
                    </ul>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                <button className="button n-button">
                    contactez
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
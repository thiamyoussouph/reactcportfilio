import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

const Works = () => {
    return (
        <div className='works'>
            <div className="w-left">
                <div className="avesome">
                    <span> domaines</span>
                    <span>Marques & Clients</span>
                    <span>Fortifiés par un vaste répertoire de marques partenaires<br />
                        et de clients satisfaits,<br /> nous continuons à fournir des solutions exceptionnelles

                    </span>

                    <button className="button s-button">Embauchez-moi</button>

                    <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>

                </div>
                </div>
            <div className="w-right">
              
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>{" "}
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                
                {/* background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    
  )
}

export default Works
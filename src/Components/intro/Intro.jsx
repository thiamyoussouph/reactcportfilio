import React from 'react'
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


const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>hy !! i am </span>
                    <span>Youssouph Thiam</span>
                    <span> a full-stack developer, trainer, and I support startups and associations in their digital transformation</span>
                </div>
                <button className='button i-button'> hire me</button>
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
                <img src={glassesimoji} alt="" />
                <div style={{top:'-4%', left:'68%'}}>
                    <FloatingDiv image={crown} text1='web' text2='developper'/>
                </div>
                <div style={{top:'19rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} text1='Best Dedign' text2='thiam'/>
                </div>
                <div className="blur" style={{background:"rba(236 210 255"}}></div>
                <div className="blur" style={{background:'#c1f5FF',top:'17rem',width:'21rem',
            height:'11rem',left:'-9'}}></div>
            </div>
        </div>
    )
}

export default Intro
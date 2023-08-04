import React from 'react'
import './Service.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Cards/Card'
import moncv from './moncv.pdf'
const Service = () => {
    return (
        <div className='Services'>
            <div className="avesome">
                <span>My Awsone</span>
                <span>Services</span>
                <span>I offer comprehensive full-stack web development solutions
                    <br /> tailored to meet your specific business needs
                </span>

                <a href={moncv} download>
                    <button className="button s-button">Dowload CV</button>
                </a>
                <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>

            </div>
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Front-end'}
                        detail={"Html,Css,Javascript,React, Angularr,Bootstrap,Tailwind  "}
                    />

                </div>
                <div style={{ top: "12rem", left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Back-end'}
                        detail={"Java,Php,Laravel,Spring boot,Uml, Merise,Sql,"}
                    />

                </div>
                <div style={{ top: "19rem", left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'coach'}
                        detail={"Active and attentive teaching, fostering learning by doing"}
                    />

                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}>
                    
                </div>
            </div>
        </div>
    )
}

export default Service
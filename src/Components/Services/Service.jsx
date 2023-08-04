import React from 'react'
import './Service.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Cards/Card'

const Service = () => {
    return (
        <div className='Services'>
            <div className="avesome">
                <span>My Awsone</span>
                <span>Services</span>
                <span>I offer comprehensive full-stack web development solutions
                    <br /> tailored to meet your specific business needs
                </span>
                <button className="button s-button">Dowload CV</button>
                <div className="blur s-blur" style={{background:"#abf1ff94"}}></div>

            </div>
            <div className="cards">
                <div>
                    <Card
                    emoji={HeartEmoji}
                     heading={'Develloper'}
                     detail={"Active and attentive teaching, fostering learning by doing"}
                     />
                    
                </div>

            </div>
        </div>
    )
}

export default Service
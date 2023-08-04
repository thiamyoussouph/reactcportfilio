import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Youssouph</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Acceuil</li>
                        <li>Services</li>
                        <li>Experiences</li>
                        <li>Portefolio</li>
                        <li>testimognals</li>
                    </ul>
                </div>
                <button className="button n-button">
                    contactez
                </button>

            </div>
        </div>
    )
}

export default Navbar
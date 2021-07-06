import React from 'react';
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello there 👋, I'm 
                    <br /> <span className="info-name">Rayna Mecham</span>.
                    <br /> I'm a frontend software &amp; web developer. 
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/coding.png').default} alt="coding girl" className="picture" />
                </div>
            </div>
            <div className="about-bottom">
                This is contact
            </div>
        </div>
    )
}

export default About

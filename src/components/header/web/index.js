import React from 'react';
import './web.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSplotch } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href='#project'>
                    <FontAwesomeIcon icon={faSplotch} />Projects
                </a>
            </div>
            <div className="web-option">
                <a href='#skills'>
                    <FontAwesomeIcon icon={faLaptopCode} />Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                    <FontAwesomeIcon icon={faBriefcase} />Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <FontAwesomeIcon icon={faUserCircle} />Contact
                </a>
            </div>
        </div>
    )
}

export default Web;

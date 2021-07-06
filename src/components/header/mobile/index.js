import React from 'react'
import './mobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faSplotch } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faTimesCircle} style={{ display: "flex", justifyContent: "flex-end", fontSize: "24px" }} />
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href='#project'>
                    <FontAwesomeIcon icon={faSplotch} style={{ display: "flex", alignItems: "center", marginRight: "4px" }} />Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href='#skills'>
                    <FontAwesomeIcon icon={faLaptopCode} style={{ display: "flex", alignItems: "center", marginRight: "4px" }} />Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                    <FontAwesomeIcon icon={faBriefcase} style={{ display: "flex", alignItems: "center", marginRight: "4px" }} />Work
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                    <FontAwesomeIcon icon={faUserCircle} style={{ display: "flex", alignItems: "center", marginRight: "4px" }} />Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile;

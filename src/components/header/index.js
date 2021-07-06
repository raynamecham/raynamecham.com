import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";

function Header() {
  const [isOpen, setIsOpen]= useState(false);
  return (
    <div className="header">
      <div className="logo">Rayna Mecham</div>
      <div className="menu">
        <div className="web-menu"><Web /></div>
        <div className="mobile-menu">
          <div onClick={()=>setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: "24px" }} />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;

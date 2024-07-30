import "./HeroimgStyles.css";

import React from 'react'
import Introimg from "../assets/about2.jpg"
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={Introimg} alt="Introimg"/>
        </div>
      <div className="content">
        <p>HELLO, I'M A FREELANCER</p>
        <h4>Web Developer</h4>
        <div>
            <Link to= "/project"
            className="btn"> PROJECTS</Link>
             <Link to= "/contact"
            className="btn btn-light"> CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg;

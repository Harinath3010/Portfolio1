import "./FooterStyles.css"

import React from 'react'
import{FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",
                    marginRight:"2rem"}}/>
                    <div>
                        <h4> Nagole</h4>
                        <h4>Hyderabad</h4>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color:"#fff",
                    marginRight:"2rem"}}/>
                    7995840345</h4>
                </div>
                <div className="email">
                  <h4><FaMailBulk size={20} style={{color:"#fff",
                    marginRight:"2rem"}}/>
                    harinathperam155</h4>
                    </div>
            </div>
            <div className="right">
                <h4> About</h4> 
                <h4> I'm Harinath Reddy. A web developer with the knowledge of
                    AI. I enjoy discussing About AI and designing websites. 
                </h4>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff",
                    marginRight:"1rem"}}
                />
                <FaTwitter size={30} style={{color:"#fff",
                    marginRight:"1rem"}}
                />
                <FaLinkedin size={30} style={{color:"#fff",
                    marginRight:"1rem"}}
                />
                 <FaInstagram size={30} style={{color:"#fff",
                    marginRight:"1rem"}}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

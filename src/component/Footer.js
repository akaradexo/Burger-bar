import React from 'react'
import { FaHamburger, FaMapMarkerAlt, FaFacebook} from 'react-icons/fa';
import { AiFillPhone,AiFillTwitterCircle,AiFillGithub} from 'react-icons/ai';
import { MdEmail} from 'react-icons/md';
import { ImLinkedin} from 'react-icons/im';

const Footer = () => {
    return (
        <footer class="footer-distributed">
 
        <div class="footer-left">
        
        <h3><FaHamburger  size="80" style={{color: "red",display:"inline-flex", margin:"0 10px"}}/>Burger Bar</h3>
        
        <p class="footer-links">
        ·
        <a href="#">Pricing</a>
        ·
        <a href="#">Contact</a>
        </p>
        
        <p class="footer-company-name">ashutosh.karade&copy; 2021</p>
        </div>
        
        <div class="footer-center">
        
        <div>
        <FaMapMarkerAlt/>
        <p><span></span> New York , London</p>
        </div>
        
        <div>
        <AiFillPhone/>
        <p>987654321</p>
        </div>
        
        <div>
        <MdEmail />
        <p><a href="mailto:support@company.com">infoburgerbar.@gmail.com</a></p>
        </div>
        
        </div>
        
        <div class="footer-right">
        
        <p class="footer-company-about">
        <span>About the company</span>Burger Making  &amp; Eating
        </p>
        
        <div class="footer-icons">
        
        <a href="#"><FaFacebook/></a>
        <a href="#"><AiFillTwitterCircle/></a>
        <a href="#"><ImLinkedin/></a>
        <a href="#"><AiFillGithub/></a>
        
        </div>
        
        </div>
        
        </footer>
    )
}

export default Footer

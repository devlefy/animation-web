import React from 'react';
import './Footer.css';


const Footer = ({ bgcolor, textColor }) => {

    console.log("bgcolor", bgcolor);

    return (
        <div className='footerParent' style={{ backgroundColor: `${bgcolor}`, color: textColor }}>
            <span className='textStle'>Thanks for stopping by, let’s connect!</span>
            <div className='linksParent'>
                <span>Email</span>
                <span>LinkedIn</span>
                <span>Resume</span>

            </div>
        </div>
    );
};

export default Footer;
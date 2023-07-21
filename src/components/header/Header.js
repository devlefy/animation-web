import React, { useState } from 'react';
import './Header.scss';

import { Link, useNavigate } from "react-router-dom";


const Header = ({ color, background, onHoverChange }) => {

    const navigate = useNavigate()



    const handleMouseEnter = (text) => {

        onHoverChange(text)
    };

    const handleMouseLeave = (text) => {

        onHoverChange(text)
    };




    return (
        <div className='container' style={{ background: background, color: color }}>
            <div className='headerParent'>
                <div className='logo'>
                    <span>nj</span>
                </div>
                <div className='content'>
                    <span onMouseEnter={() => handleMouseEnter('WORK')}
                        onMouseLeave={() => handleMouseLeave("")} onClick={() => navigate("/")}>
                        WORK
                    </span>
                    <span onMouseEnter={() => handleMouseEnter('ABOUT')}
                        onMouseLeave={() => handleMouseLeave("")} onClick={() => navigate("/about")}>

                        ABOUT
                    </span>       <span onMouseEnter={() => handleMouseEnter('PLAY')}
                        onMouseLeave={() => handleMouseLeave("")} onClick={() => navigate("/play")}>

                        PLAY
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
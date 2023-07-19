import React from 'react';
import './Header.scss';

import { Link, useNavigate } from "react-router-dom";


const Header = ({ color, background }) => {

    const navigate = useNavigate()

    return (
        <div className='container' style={{ background: background, color: color }}>
            <div className='headerParent'>
                <div className='logo'>
                    <span>nj</span>
                </div>
                <div className='content'>
                    <span onClick={() => navigate("/")}>
                        WORK
                    </span>
                    <span onClick={() => navigate("/about")}>

                        ABOUT
                    </span>       <span onClick={() => navigate("/play")}>

                        PLAY
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
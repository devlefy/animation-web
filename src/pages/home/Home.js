import React, { useState } from 'react';
import './Home.scss';
import Rectangle from '../../assets/images/Rectangle 2552.png'
import chatgpt from '../../assets/images/C719913A-C7B6-4EB4-A20B-8142769869AA 2@2x.png'
import home1 from '../../assets/new_images/home1.png'

import Header from '../../components/header/Header';
import { useNavigate } from 'react-router-dom';




const Home = () => {


    const [HoveredText, setHoveredText] = useState('');



    const handleHoverChange = (text) => {
        setHoveredText(text)
    };

    const navigate = useNavigate()


    const [isDragging, setIsDragging] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffsetX(e.clientX - position.x);
        setOffsetY(e.clientY - position.y);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        setPosition({ x, y });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    return (
        <>
            <Header onHoverChange={handleHoverChange} />
            <div className='homeContainer'>

                <div className='homeParent'>
                    <div className='heroSection'>

                        {
                            HoveredText &&
                            <div className='scrollingtext'>
                                <ul class="ticker">
                                    <li>{HoveredText}</li>
                                    <li>{HoveredText}</li>
                                    <li>{HoveredText}</li>
                                    <li>{HoveredText}</li>
                                    <li>{HoveredText}</li>
                                    <li>{HoveredText}</li>
                                    <li>{HoveredText}</li>




                                </ul>
                            </div>
                        }
                    </div>
                    <div className='gameSection'>
                        <div
                            className="image-container"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                        >
                            <img
                                className={`draggable-image ${isDragging ? 'dragging' : ''}`}
                                src={home1}
                                alt="Draggable Image"
                                style={{
                                    left: position.x + 'px',
                                    top: position.y + 'px',
                                }}
                            />
                        </div>
                    </div>
                    <div className='workSection'>
                        <div className='workLeft'>
                            <div className='textParent'>
                                <span className='heading'>
                                    Work
                                </span>
                                <span className='body'>
                                    I enjoy creating great work with great people.
                                </span>
                            </div>
                        </div>
                        <div className='workRight'>
                            <div className='card'>
                                <img className='cardimage' src={Rectangle} alt="img" onClick={() => navigate('/protfolio/govenda')} />
                                <span className='title1'>Product Designer</span>
                                <span className='title2'>Govenda Committee Suite</span>
                                <span className='description'>ui/ux design, figma,
                                    interaction design,
                                    visual strategy, adobe suite, sketch, prototyping,
                                    user research and
                                    testing, iterative design process</span>
                                <div className='btnparent'>
                                    <button className='btn'>EXPERIENCE DESIGN</button>

                                </div>
                            </div>


                            <div className='card'>
                                <img className='cardimage' src={chatgpt} alt="img" onClick={() => navigate('/protfolio/chatgpt')} />
                                <span className='title1'>Visual Designer</span>
                                <span className='title2'>ChatGPT Reimagined</span>
                                <span className='description'>Crafting an experience that is intuitive, beautiful, and engaging to help people have better interactions with AI.</span>
                                <div className='btnparent'>
                                    <button className='btn'>Web Design</button>
                                    <button className='btn'>UI Design</button>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='heroSection'></div>
                </div>
            </div>
        </>

    );
};

export default Home;
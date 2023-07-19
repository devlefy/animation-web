import React from 'react';
import './Home.scss';
import Rectangle from '../../assets/images/Rectangle 2552.png'
import chatgpt from '../../assets/images/C719913A-C7B6-4EB4-A20B-8142769869AA 2@2x.png'
import Header from '../../components/header/Header';
import { useNavigate } from 'react-router-dom';



const Home = () => {

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div className='homeContainer'>

                <div className='homeParent'>
                    <div className='heroSection'></div>
                    <div className='gameSection'></div>
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
import React, { useEffect, useState } from 'react';
import './About.scss'
import img1 from '../../assets/images/C719913A-C7B6-4EB4-A20B-8142769869AA 1.png'
import img2 from '../../assets/images/C719913A-C7B6-4EB4-A20B-8142769869AA 2.png'
import img3 from '../../assets/images/C719913A-C7B6-4EB4-A20B-8142769869AA 3.png'
import Header from '../../components/header/Header';


const About = () => {


    const [focusedCardIndex, setFocusedCardIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
            const centerPosition = scrollOffset + windowHeight / 2;

            const cards = document.querySelectorAll('.card');
            let cardIndex = -1;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();


                const cardCenter = rect.bottom + rect.height;

                if (cardCenter >= scrollOffset && cardCenter <= centerPosition) {
                    cardIndex = index + 1; // Add 1 to adjust the index
                    return; // Exit the loop once the closest card is found
                }
            });

            setFocusedCardIndex(cardIndex);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);








    console.log("focusedCardIndex", focusedCardIndex);


    return (
        <>
            <Header color='#ffffff' background="#000000" />
            <div className='containerAbout'>
                <div className='aboutParent'>
                    <div className='introSection'>
                        <span>Hi! I’m Nehal, a multi-disciplinary product designer creating thought provoking products for web and mobile. </span>
                        <button>RESUME</button>

                    </div>
                    <div className='descriptionSection'>
                        <span className='span1'>
                            MY DESIGN PHILOSOPHY
                        </span>
                        <span className='span2'>I am determined to leave the industry better than I found it.</span>
                    </div>
                    <div className='titleSection'>
                        <span className='span1'>
                            empathic
                        </span>
                        <span className='span2'>
                            empathic
                        </span>      <span className='span3'>
                            empathic
                        </span>
                    </div>
                    <div className='portfolioSection'>

                        <div className='leftSection'>

                            <div className='contentdiv'>
                                <span style={{ color: focusedCardIndex === 1 ? "white" : focusedCardIndex === 2 || focusedCardIndex === 3 ? "grey" : "white" }}>
                                    ui/ux design, figma,
                                    interaction design,
                                </span>
                                <span style={{ color: focusedCardIndex === 3 ? "white" : focusedCardIndex === 2 || focusedCardIndex === 1 ? "grey" : "white" }}>
                                    sketch, prototyping,   visual strategy, adobe suite  ,
                                </span>
                                <span style={{ color: focusedCardIndex === 2 ? "white" : focusedCardIndex === 3 || focusedCardIndex === 1 ? "grey" : "white" }}>

                                    user research and
                                    testing, iterative design process
                                </span>
                            </div>
                        </div>
                        <div className='centerSection'>
                            <div className='card'>
                                <img className='cardimage' src={img1} alt="img" />

                                <span className='title2'>A LITTLE BIT ABOUT ME</span>
                                <span className='description'>ui/ux design, figma,
                                    interaction design,
                                    visual strategy, adobe suite, sketch, prototyping,
                                    user research and
                                    testing, iterative design process</span>

                            </div>

                            <div className='card'>
                                <img className='cardimage' src={img3} alt="img" />

                                <span className='title2'>INSPIRATION</span>
                                <span className='description'>ui/ux design, figma,
                                    interaction design,
                                    visual strategy, adobe suite, sketch, prototyping,
                                    user research and
                                    testing, iterative design process</span>

                            </div>
                        </div>
                        <div className='rightSection'>
                            <div className='card'>
                                <img className='cardimage' src={img2} alt="img" />

                                <span className='title2'>PERSONAL LIFE</span>
                                <span className='description'>ui/ux design, figma,
                                    interaction design,
                                    visual strategy, adobe suite, sketch, prototyping,
                                    user research and
                                    testing, iterative design process</span>

                            </div>
                        </div>


                    </div>



                </div>
            </div>
        </>

    );
};

export default About;
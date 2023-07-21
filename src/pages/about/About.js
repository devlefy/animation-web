import React, { useEffect, useState } from 'react';
import './About.scss'
import img1 from '../../assets/images/C719913A-C7B6-4EB4-A20B-8142769869AA 1.png'
import img2 from '../../assets/images/C719913A-C7B6-4EB4-A20B-8142769869AA 2.png'
import img3 from '../../assets/images/C719913A-C7B6-4EB4-A20B-8142769869AA 3.png'
import Header from '../../components/header/Header';


const About = () => {

    const [hoverText, setHoverText] = useState('')
    const [focusedCardIndex, setFocusedCardIndex] = useState(-1);
    const [top, setTop] = useState(0);
    const [active, setactive] = useState(false);






    const handleHoverChange = (text) => {
        setHoverText(text)


    }


    console.log("hoverText", hoverText);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;

            const cards = document.querySelectorAll('.card');

            const crd1 = cards[0].getBoundingClientRect()
            const crd3 = cards[2].getBoundingClientRect()

            const crd2 = cards[1].getBoundingClientRect()




            setTop(crd1.bottom + 400)

            if (crd1.top <= windowHeight - 300) {
                setFocusedCardIndex(1)


            }


            if (crd3.top <= windowHeight - 300) {
                setFocusedCardIndex(3)


            }

            if (crd2.top <= windowHeight - 300) {
                setFocusedCardIndex(2)


            }




        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);















    return (
        <>
            <Header color='#ffffff' background="#000000" onHoverChange={handleHoverChange} />
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

                            <div className='contentdiv' style={{ bottom: focusedCardIndex ? `${top}px` : null }}>
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
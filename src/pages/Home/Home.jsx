import React from 'react'
import './Home.css'
import home1 from '../../assets/images/home1.png';
import home2 from '../../assets/images/home-work-1.svg';
import home3 from '../../assets/images/home-work-2.svg';
import home4 from '../../assets/images/home-work-3.svg';
import Cursor from "react-special-cursor";

const Home = () => {
    const welcome = (
        <h3 className="cursor-view">
          view
        </h3>
      );
    window.onscroll = () => {
        var scrolltop  = window.pageYOffset || document.documentElement.scrollTop
        const item =  document.getElementById('anime-img')
        var w = window.innerWidth;
        var temp  = scrolltop
        if( w > 1440){
            if(scrolltop < 899){
                item.style.transform = 'translateY(' + temp + 'px)' ;
            }
        }
        else if(w <= 1440 && w >= 900){
            if(scrolltop < 780){
                item.style.transform = 'translateY(' + temp + 'px)' ;
            }
        }

        else if(w <= 900 && w >=375){
            if(scrolltop < 780){
                item.style.transform = 'translateY(' + temp + 'px)' ;
            }
        }
        
    }
  return (
    <>
    <Cursor color="orange" hoverClasses={[
      { classNameOfTargetElement: "para", classNameOfStyle: "para-hover" },
      {
          classNameOfTargetElement: "children",
          classNameOfStyle: "children-hover",
          cursorChildren: welcome,
        },
    ]}>
        <section className="home-intro">
            <p className='para'>
            &nbsp; &nbsp; &nbsp;
            Designing the 
            &nbsp; &nbsp; &nbsp; &nbsp; 
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            line 
            &nbsp; &nbsp;  &nbsp;
            between &nbsp;
            <br/> 
            &nbsp; &nbsp;functionality
             &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             <br/> 
             &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
             & aesthetics</p>
             <span className='home-pd'>PRODUCT DESIGNER</span>
             <span className='home-port'>PORTFOLIO</span>
             <span className='anime-img' id='anime-img'><img src={home1} alt="" /></span>
        </section>
        
        <section className='home-intro-2'></section>
        <section className="home-work">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Work</h2>
                        <p className='work-sec-para'>I enjoy creating great products with great people.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="pages">
                            <div className="page-tile govendapagetile">
                                <a href="#" className='children'>
                                    <div className="page-poster">
                                        <img src={home2} alt="" />
                                    </div>
                                </a>
                                <p className='page-pre-head'>Product Designer</p>
                                <h3>Govenda Committee Suite</h3>
                                <p className='page-para'>Led design for a new product, including product strategy, defining metrics and objectives, producing interactions and prototyping.</p>
                                <a className='btn' href="#">EXPERIENCE DESIGN</a>
                            </div>
                            <div className="page-tile gptpagetile">
                                <a href="#">
                                    <div className="page-poster">
                                        <img src={home3} alt="" />
                                    </div>
                                </a>
                                <p className='page-pre-head'>Visual Designer</p>
                                <h3>ChatGPT Reimagined</h3>
                                <p className='page-para'>Crafting an experience that is intuitive, beautiful, and engaging to help people have better interactions with AI.</p>
                                <div className="btn-holder">
                                    <a className='btn' href="#">UI Design</a>
                                    <a className='btn' href="#">Animation</a>

                                </div>
                            </div>
                            <div className="page-tile davispagetile">
                                <a href="#">
                                    <div className="page-poster">
                                        <img src={home4} alt="" />
                                    </div>
                                </a>
                                <p className='page-pre-head'>UX Designer</p>
                                <h3>Davis Housing</h3>
                                <p className='page-para'>Designing the next generation search bar to drive product growth for a local consumer-facing service</p>
                                <div className="btn-holder">
                                    <a className='btn' href="#">UX Flow</a>
                                    <a className='btn' href="#">Responsive Design</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Cursor>
    </>
  )
}

export default Home
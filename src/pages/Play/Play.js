import React from 'react';
import './Play.scss'

import img1 from '../../assets/images/Portfolio_Artwork_2 1.png'
import img2 from '../../assets/images/Portfolio_Artwork_3 1.png'
import img3 from '../../assets/images/Portfolio_Artwork_4 1.png'
import img4 from '../../assets/images/Portfolio_Artwork_5 1.png'
import img5 from '../../assets/images/Portfolio_Artwork_8 1.png'
import img6 from '../../assets/images/Portfolio_Artwork_9 1.png'
import img7 from '../../assets/images/Rectangle 2546.png'
import img8 from '../../assets/images/Rectangle 2552.png'
import img9 from '../../assets/images/memjar 1.png'
import img10 from '../../assets/images/people 1.png'
import Header from '../../components/header/Header';




const Play = () => {


    const imgs = [img10, img3, img9, img2, img4, img5, img6, img7, img8, img1]

    const handleHoverChange = (text) => {
        console.log(text);
    };

    return (
        <>
            <Header onHoverChange={handleHoverChange} />
            <div className='playParent'>
                <div className='div1'></div>

                <div className='div2'>
                    {
                        imgs.map((item) => {
                            return <img src={item} alt="img" />
                        })
                    }
                </div>


            </div>
        </>

    );
};

export default Play;
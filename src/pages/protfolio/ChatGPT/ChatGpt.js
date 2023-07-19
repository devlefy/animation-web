import React from 'react';
import Header from '../../../components/header/Header';

import ChatGPT_logo from "../../../assets/images/ChatGPT_logo 1.png";

import './ChatGpt.scss'

const ChatGpt = () => {
    return (
        <>
            <Header color='#ffffff' background="#74AA9C" />
            <div className='chatgptContainer'>

                <div className='chatgptparent'>
                    <div className='chatgptHeroSection'>
                        <div className='content'>
                            <div className='textContent'>
                                <span className='heading'>ChatGPT</span>
                                <div className='body'>
                                    <span className='span1'>Role </span>
                                    <span className='span2'> Visual Designer</span>
                                </div>

                                <div className='body'>
                                    <span className='span1'>   Duration</span>
                                    <span className='span2'>    March 2023 (3 weeks)</span>
                                </div>
                                <div className='body'>
                                    <span className='span1'>   Tools</span>
                                    <span className='span2'>   Figma, ChatGPT</span>
                                </div>



                            </div>
                            <div className='imagecontent'>
                                <img src={ChatGPT_logo} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className='chatgptAbout'>
                        <div className='heading'>
                            <span>About ChatGPT</span>
                        </div>
                        <div className='description'>
                            <span>
                                ChatGspanT is an AI-powered conversational agent developed by OpenAI. ChatGPT is designed to generate human-like text responses, enabling interactive and dynamic conversations with users.
                                <br /><br />
                                ChatGPT can understand and generate text in natural language, allowing users to engage in dialogue with the model. Users can provide prompts or ask questions, and ChatGPT responds accordingly by generating relevant and contextually coherent text.
                            </span>
                        </div>
                    </div>

                    <div className='ProblemStatement'></div>
                    <div className='chatgptContext'>
                        <div className='heading'>
                            <span>About ChatGPT</span>
                        </div>
                        <div className='description'>
                            <span className='span1'>Problem</span>
                            <span className='span2'>

                                ChatGPT is designed to cater to a wide range of users and target audiences. The current issue with ChatGPT lies in its limited user interface, which hinders its ability to effectively manage context, ensure clarity, and handle errors. Furthermore, it lacks customization options and accessibility features. It is necessary to rephrase this problem statement in a way that conveys a clearer understanding of the limitations and challenges faced by ChatGPT's user interface.
                            </span>
                        </div>
                    </div>
                    <div className='ProblemStatement2'>
                        <p>
                            Crafting an experience that is <span>intuitive</span>, <span>innovative</span> and <span>beautiful</span> to help people engage in interactive and dynamic conversations.
                        </p>
                    </div>
                    <div className='chatgptContext'>
                        <div className='heading'>
                            <span>About ChatGPT</span>
                        </div>
                        <div className='description'>
                            <span className='span1'>Problem</span>
                            <span className='span2'>

                                ChatGPT is designed to cater to a wide range of users and target audiences. The current issue with ChatGPT lies in its limited user interface, which hinders its ability to effectively manage context, ensure clarity, and handle errors. Furthermore, it lacks customization options and accessibility features. It is necessary to rephrase this problem statement in a way that conveys a clearer understanding of the limitations and challenges faced by ChatGPT's user interface.
                            </span>
                        </div>


                    </div>
                </div>
            </div>
        </>

    );
};

export default ChatGpt;
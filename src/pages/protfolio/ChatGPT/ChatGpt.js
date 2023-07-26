import React from 'react';
import Header from '../../../components/header/Header';

import ChatGPT_logo from "../../../assets/images/ChatGPT_logo 1.png";
import working_with_design1 from "../../../assets/images/working_with_design1.png";
import working_with_design2 from "../../../assets/images/working_with_design2.png";
import workingwithdesignPlan from "../../../assets/images/workingwithdesignPlan.png";




import './ChatGpt.scss'

const ChatGpt = () => {

    const design_Section_Data = [{ s_no: '01', heading: "Context Management", body: " I devised strategies to better capture and retain user context throughout the conversation" },
    { s_no: '02', heading: "Error Handling", body: " I implemented error detection mechanisms and developed intuitive error messages to guide users in case of input mistakes or system limitations." },
    { s_no: '03', heading: "Customization and Personalization", body: "I dedicated efforts to provide users with options to personalize their experience. This included features such as customizable themes, font sizes etc." },
    { s_no: '04', heading: "Accessibility Features", body: "I implemented accessibility features like screen reader compatibility, ensuring inclusivity and usability for a wider range of users." }
    ]


    const ideaBox = ['Idea 1 - Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text ', 'Idea 1 - Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text ', 'Idea 1 - Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text ', 'Idea 1 - Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text Lorem Ipsum text ']


    const handleHoverChange = (text) => {
        console.log(text);
    };

    return (
        <>
            <Header color='#ffffff' background="#74AA9C" onHoverChange={handleHoverChange} />
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
                            <span>Context</span>
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
                    <div className='chatgptContext2'>
                        <div className='heading'>
                            <span>Context</span>
                        </div>
                        <div className='descriptionParent'>


                            <div className='description'>
                                <span className='span1'>My Role</span>
                                <span className='span2'>
                                    As the sole designer, I seized the opportunity to push the boundaries of visual design. This involved studying various other language models, developing frameworks, and crafting mockups to showcase my vision. Throughout this process, I focused on implementing innovative design principles and formulating a compelling visual strategy that aligns with ChatGPT’s objective.
                                </span>
                            </div>

                            <div className='description'>
                                <span className='span1'>Timeline</span>
                                <span className='span2'>
                                    Over the six week timeline, I allocated two weeks to research language models and gather pain points.  I allocated the rest of the time for total design time which was iterative. I got one design review and one dev review from designer John Smith and developer Jane Smith.
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className='ProblemStatement3'>
                        <span>CHALLENGE</span>
                        <p>

                            Balancing style with an efficient user experience.
                        </p>
                    </div>

                    <div className='chatgptDesign'>
                        <div className='heading'>
                            <span>Design</span>
                        </div>
                        <div className='descriptionParent'>
                            <span>Four key areas that I prioritized:</span>
                            {
                                design_Section_Data.map((item) => {
                                    return <div className='description'>
                                        <div className='header'>
                                            <span className='span1'>{item.s_no}</span>
                                            <span className='span3'>{item.heading}</span>
                                        </div>
                                        <div className='body'>
                                            <span className='span2'>
                                                {item.body}
                                            </span>
                                        </div>
                                    </div>
                                })
                            }




                        </div>

                    </div>

                    <div className='chatgptIdeaSection'>
                        <div className='body'>
                            <span className='span1'>PROCESS</span>
                            <span className='span2'>Brainstorm & Ideate</span>


                            {ideaBox.map((item) => {

                                return (
                                    <div className='box'>
                                        <div className='boxBody'>
                                            <span>
                                                {item}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}



                        </div>
                    </div>


                    <div className='workingDesign'>
                        <div className='body'>
                            <span className='span1'>PROCESS</span>
                            <span className='span2'>Working with a design system</span>
                            <span className='span3'>Using the ChatGPT Design System in Figma, I designed multiple layout iterations within Figma to find the most optimal components and assets to ensure a consistent and clear design. I added components to their existing system so that I could add to the visual story.</span>
                            <img src={working_with_design1} alt="" />
                            <img src={working_with_design2} alt="" />


                        </div>
                    </div>

                    <div className='workingDesign'>
                        <div className='body'>
                            <span className='span1'>PROCESS</span>
                            <span className='span2'>Context through Prompts and Characters</span>
                            <ol>
                                <li>
                                    <span className='span3'>Offering a prompt library</span>
                                    <ul>
                                        <li>
                                            <span className='span3'>This would improve the variety of prompts used by users. </span>
                                        </li>
                                        <li>
                                            <span className='span3'>will also help decrease the learning curve for not so tech-savvy users.</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className='span3'>Allowing them to create their own prompts and save them</span>
                                    <ul>
                                        <li>
                                            <span className='span3'>This would improve the variety of prompts used by users. </span>
                                        </li>
                                        <li>
                                            <span className='span3'>
                                                Even though ChatGPT has a conversation history, it is not great at remembering context. Users can easily re-use prompts when ChatGPT forgets context.</span>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <span className='span3'>Selecting a character for ChatGPT so that it can maintain if for the whole conversation </span>
                                    <ul>
                                        <li>
                                            <span className='span3'>Due to its open ended information library, it is difficult to narrow down context when using ChatGPT as a tool. Inbuild characters will help limit the parameters of the conversation so that users can get improved answers.
                                            </span>
                                        </li>
                                        <li>
                                            <span className='span3'>
                                                Choosing a character can stay for the entirety of the conversation, decreasing time typing the character in every single prompt.
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                            </ol>

                            <img src={workingwithdesignPlan} alt="" />
                        </div>
                    </div>

                    <div className='workingDesign'>
                        <div className='body'>
                            <span className='span1'>PROCESS</span>
                            <span className='span2'>Error Handling through Error Messages, Feedback Loop and Alternatives</span>

                            <p>I focused on error handling that are not based on informational load or training data to limit the scope of this project. </p>

                            <span className='span3'>Different types of error messages:</span>

                            <ol>
                                <li>
                                    <span className='span3'>Misunderstands a message due to ambiguity</span>

                                </li>
                                <li>
                                    <span className='span3'>Response to Insensitive or Offensive Content</span>

                                </li>

                                <li>
                                    <span className='span3'>Response to Insensitive or Offensive Content </span>

                                </li>

                                <li>
                                    <span className='span3'>Misspelling or Typo </span>

                                </li>        <li>
                                    <span className='span3'>Gathering feedback from users </span>

                                </li>

                                <li>
                                    <span className='span3'>Suggesting an alternative prompt or question </span>

                                </li>
                            </ol>

                            <img src={workingwithdesignPlan} alt="" />
                        </div>
                    </div>


                    <div className='workingDesign'>
                        <div className='body'>
                            <span className='span1'>PROCESS</span>
                            <span className='span2'>Customizing Capabilities</span>

                            <p>When approaching customizing capabilities, I looked at current customization. ChatGPT only offers users with a light theme and a dark theme.</p>

                            <span className='span3'>This is what I added:</span>

                            <ol>
                                <li>
                                    <span className='span3'>Light Theme Update</span>

                                </li>
                                <li>
                                    <span className='span3'>Customized Text Color</span>

                                </li>

                                <li>
                                    <span className='span3'>Customized Text Color </span>

                                </li>

                                <li>
                                    <span className='span3'>Customized Text Color </span>

                                </li>
                            </ol>

                            <img src={workingwithdesignPlan} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ChatGpt;
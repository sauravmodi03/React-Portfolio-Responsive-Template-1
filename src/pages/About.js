
import '../css/About.scss';
import React from 'react';
import about from '../img/self-orig.jpg';
import { getY, getHeight } from './Utility.js';
import { Link } from 'react-router-dom';

export default function About() {

    const innerHeight = document.documentElement.clientHeight;

    // const getY = (element) => {
    //     return element.getBoundingClientRect().y;
    // }

    // const getHeight = (element) => {
    //     return element.getBoundingClientRect().height
    // }

    document.addEventListener('scroll', function () {
        var infoList = document.querySelectorAll(".slideInLeft");
        var rightList = document.querySelectorAll(".slideInRight");
        var label = document.querySelector(".about-label");
        var slideTopList = document.querySelectorAll(".slideInTop");

        if (innerHeight > getY(label) + getHeight(label) * 2 / 3) {
            label.style.animation = "labelSlideInTop 1s forwards";
        }

        for (let i = 0; i < infoList.length; i++) {
            if (innerHeight > getY(infoList[i]) + getHeight(infoList[i]) / 4) {
                infoList[i].style.animation = "slide-X 1s forwards";
            }
        }

        for (let i = 0; i < rightList.length; i++) {
            if (innerHeight > getY(rightList[i]) + getHeight(rightList[i]) / 4) {
                rightList[i].style.animation = "slide-X 1s forwards";
            }
        }

        for (let i = 0; i < slideTopList.length; i++) {
            if (innerHeight > getY(slideTopList[i]) + getHeight(slideTopList[i]) / 4) {
                slideTopList[i].style.animation = "slide-Y 1s forwards";
            }
        }

    });

    return (
        <div id="about" className='About flex-top-padding'>
            <div className='about-label heading-text'><h2>About Me</h2></div>
            <div className='about-info-wrapper -drop-shadow'>
                <article className='slideInTop'>
                    <section className='about-info'>
                        <div className='about-info-main'>
                            <p className='slideInLeft'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;
                                <a className='text-link' href='#' target='_blank'>Lorem Ipsum</a>
                                &nbsp;in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className='slideInLeft'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <p className='slideInLeft'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <p className='slideInLeft'> Languages I speak: Java, HTML, CSS, JavaScript, Python</p>
                            <p className='slideInLeft'> Framework knowledge: Spring, React, Angular, Bootstrap, JDBC, JPA, Hibernate</p>
                            <p className='slideInLeft'> Build Tool: Maven, Gradle</p>
                            <p className='slideInLeft'> Tools experience: Intellij, Eclipse, Pycharm, VSCode, GiBash</p>
                        </div>
                    </section>
                    <section className='headshot-container'>
                        <picture className='about-pic slideInRight'>
                            <img src={about} alt="About logo"></img>
                        </picture>
                        <p className='about-l3 -bold slideInRight'>
                            5+ Yrs | Chicago, USA
                        </p>
                    </section>

                </article>
            </div>
        </div>
    );
}

// export default About;
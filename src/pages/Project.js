
import { getY, getHeight } from './Utility.js';
import '../css/Project.scss';
import clientPortal from '../img/insurance.png';
import agentPortal from '../img/agentportal.png';
import chromeExt from '../img/chrome-ext.png';
import { useEffect } from 'react';

import arrow from '../img/arrow-up-d.png';
import arrowL from '../img/arrow-up-l.png';

export function Project(props) {

    const innerHeight = document.documentElement.clientHeight;

    document.addEventListener('scroll', function () {
        var label = document.querySelector(".project-label");
        var listProjects = document.querySelectorAll(".slideInTop");

        if (innerHeight > getY(label) + getHeight(label) * 2 / 3) {
            label.style.animation = "labelSlideInTop .5s forwards";
        }

        for (let i = 0; i < listProjects.length; i++) {
            if (innerHeight > getY(listProjects[i]) + getHeight(listProjects[i]) / 4) {
                listProjects[i].style.animation = "slide-Y .5s forwards";
            }
        }
    });

    return (
        <div id="project" className='Project flex-top-padding'>
            <div className='project-label heading-text'><h2>Projects</h2></div>
            <div className='project-container'>
                <div className='scale-project' tabIndex="1">
                    <section className='project-wrapper slideInTop' tabIndex="1">
                        <div className='project-info'>
                            <h4>Lorem Ipsum</h4>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                        </div>
                        <picture className='project-picture' >
                            <img src={clientPortal} alt="Client Portal" />
                            <picture className='info-arrow'><img className="info-arrow-img" src={props.darkTheme ? arrowL : arrow} alt="Arrow" /></picture>
                        </picture>
                    </section>
                </div>
                <div className='scale-project' tabIndex="1">
                    <section className='project-wrapper even-p-wrapper slideInTop' tabIndex="1">
                        <div className='project-info'>
                            <h4>Lorem Ipsum</h4>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                        </div>
                        <picture className='project-picture' >
                            <img src={agentPortal} alt="Client Portal" />
                            <picture className='info-arrow' ><img className="info-arrow-img" src={props.darkTheme ? arrowL : arrow} alt="Arrow" /></picture>
                        </picture>
                    </section>
                </div>
                <div className='scale-project' tabIndex="1">
                    <section className='project-wrapper slideInTop' tabIndex="1">
                        <div className='project-info'>
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                        </div>
                        <picture className='project-picture' >
                            <img src={chromeExt} alt="Client Portal" />
                            <picture className='info-arrow'><img className="info-arrow-img" src={props.darkTheme ? arrowL : arrow} alt="Arrow" /></picture>
                        </picture>
                    </section>
                </div>
            </div>
        </div>
    );
}
import { Link } from 'react-scroll';
import '../css/HomeStyle.scss';
import manLogo from '../img/man.png';
import arrowDownDark from '../img/arrow-down-d.png';
import arrowDownWhite from '../img/arrow-down-l.png';
import { useEffect, useState } from 'react';
import resumeqr from '../img/ResumeQR.png';
import QRlogo from '../img/qr-d.png';
import Resume from '../data/Resume.pdf';


function Home(props) {

    const [avatar, showAvatar] = useState(true);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            document.getElementById("scroller-wrapper").style.display = "none";
            document.getElementById("top-scroll-wrapper").style.width = "2.5em";
        } else {
            document.getElementById("scroller-wrapper").style.display = "grid";
            document.getElementById("top-scroll-wrapper").style.width = "0";
        }
    });

    useEffect(() => {
        var element = document.getElementById("avatar-container");

        element.addEventListener("mouseenter", function () {
            showAvatar(false);
        });

        element.addEventListener("mouseleave", function () {
            showAvatar(true);
        });
    });

    const manageQR = () => {
        showAvatar(!avatar);
    }

    return (
        <div id="home" className="Home flex-top-padding">
            <article>
                <section id="avatar-container" className="avatar-container">
                    {avatar ? <img id="avatar" className="avatar" src={manLogo} alt="Avatar Logo" />
                        : <img id="resume" className="avatar" src={resumeqr} alt="Avatar Logo" />}
                </section>
                <div onClick={manageQR} className="qr-wrapper">
                    <img id="qr-logo" src={QRlogo} alt="QR logo" />
                </div>
                <section className="info">
                    <div className='info-l1-wraper drop-heading'>
                        <span className='info-l2 info-bg big-heading'>Hi, I'm Lorem Ipsum.</span>
                    </div>
                    <span className='info-l3 info-bg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </span>
                    <div className='resume-link-wrap'>
                        <a href={Resume} className="resumeLink" download="Lorem_Ipsum">
                            <span>Resume</span>
                            <div className='download-wrapper'>
                                <img src={props.darkTheme ? arrowDownWhite : arrowDownDark} alt="arrow logo" />
                            </div>
                        </a>
                    </div>
                </section>
            </article>
        </div>
    );
}

export default Home;
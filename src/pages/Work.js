import '../css/Work.scss';
import Label from './Label';
import { getY, getHeight } from './Utility.js';

function Project() {

    const innerHeight = document.documentElement.clientHeight;

    document.addEventListener('scroll', function () {
        const leftList = document.querySelectorAll(".slidein-left-animation");
        const rightList = document.querySelectorAll(".slidein-right-animation");
        const label = document.querySelector(".work-label");

        for (let i = 0; i < leftList.length; i++) {
            if (innerHeight > getY(leftList[i]) + getHeight(leftList[i]) / 4) {
                leftList[i].style.animation = "content-slideInLeft 1s forwards";
            }
        }

        for (let i = 0; i < rightList.length; i++) {
            if (innerHeight > getY(rightList[i]) + getHeight(rightList[i]) / 4) {
                rightList[i].style.animation = "content-slideInRight 1s forwards";
            }
        }

        if (innerHeight > getY(label) + getHeight(label) * 2 / 3) {
            label.style.animation = "labelSlideInTop 1s forwards";
        }
    });

    return (
        <div id="work" className="Work flex-top-padding">
            <div className='work-label heading-text'><h2>Work</h2></div>
            <div className="timeline">
                <div className="timeline-wrapper left slidein-left-animation">
                    <div className="content shadow-left slidein-left-animation">
                        <h2>Jan 2023 - Present</h2>
                        <p>Lorem Ipsum</p>
                        <p>Company: Lorem Ipsum</p>
                        <p>Location: Lorem Ipsum</p>
                    </div>
                </div>
                <div className="timeline-wrapper right slidein-right-animation">
                    <div className="content shadow-right slidein-right-animation">
                        <h2>Jan 2020 - Dec 2021</h2>
                        <p>Lorem Ipsum</p>
                        <p>Company: Lorem Ipsum</p>
                        <p>Location: Lorem Ipsum</p>
                    </div>
                </div>
                <div className="timeline-wrapper left slidein-left-animation">
                    <div className="content shadow-left slidein-left-animation">
                        <h2>Nov 2016 - Dec 2019</h2>
                        <p>Lorem Ipsum</p>
                        <p>Company: Lorem Ipsum</p>
                        <p>Location: Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
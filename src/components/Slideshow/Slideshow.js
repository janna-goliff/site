import React, { useState } from "react";
import './slideshow.scss';
import Expandable from "../Expandable/Expandable";

/**
 * Component for rendering a page header section
 * array of objects of form: {title, subtitle, caption, captionTitle, imgSrc}
 */
function Slideshow(props) {
    const [slide, setSlide] = useState(0);

    return (
        <div className="slideshow">
            <div className="title">{props.slideArray[slide].title}</div>
            <div className="subtitle">{props.slideArray[slide].subtitle}</div>
            <div className="sliders">
                <div className="arrow" onClick={() => setSlide(slide - 1 > -1 ? slide - 1 : props.slideArray.length - 1)}>
                    <svg className="leftArrow mainArrow" alt="leftArrow" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.22 308.81"><defs>
                        </defs><line className="cls-2" x1="359.22" y1="154.41" x2="22.47" y2="154.41"/><polyline className="cls-1" points="147.42 20 20 154.41 147.42 288.81"/>
                    </svg>
                </div>
                <Expandable 
                    imgaddress={props.slideArray[slide].imgSrc}
                    description=""
                    className={'gen_img'}
                />
                <div className="arrow" onClick={() => setSlide(slide + 1 !== props.slideArray.length ? slide + 1 : 0)} >
                    <svg className="rightArrow mainArrow" alt="rightArrow" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.22 308.81"><defs>
                        </defs><line className="cls-2" x1="359.22" y1="154.41" x2="22.47" y2="154.41"/><polyline className="cls-1" points="147.42 20 20 154.41 147.42 288.81"/>
                    </svg>
                </div>
            </div>
            <div className="caption_container">
                <div className="caption_title">{props.slideArray[slide].captionTitle}</div>
                <div className="text">{props.slideArray[slide].caption}</div>
            </div>
        </div>
    );
}

export default Slideshow;
  
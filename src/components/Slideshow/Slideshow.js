import React, { useState } from "react";
import './slideshow.scss';
import Expandable from "../Expandable/Expandable";
import arrow from "../../assets/slide_arrow.png"

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
                    <img className="leftArrow" src={arrow} alt="leftArrow" />
                </div>
                <Expandable 
                    imgaddress={props.slideArray[slide].imgSrc}
                    description=""
                    className={'gen_img'}
                />
                <div className="arrow" onClick={() => setSlide(slide + 1 !== props.slideArray.length ? slide + 1 : 0)} >
                    <img className="rightArrow" src={arrow} alt="rightArrow" />
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
  
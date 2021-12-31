import React from "react";
import './phoneframe.scss';

/**
 * Component for rendering an image inside a phone frame shape
 * 
 * @param {String} imageSrc - src value for image tag 
 * @param {String} imageAlt - alt value for image tag 
 * @returns 
 */
function PhoneFrame({ imageSrc, imageAlt }) {
    return (
        <>
            <div className="phone_frame_wrapper">
                <img className="phone_frame_image" src={imageSrc} alt={imageAlt} />
            </div>
        </>
    );
}

export default PhoneFrame;
  
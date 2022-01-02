import React, { useEffect, useState } from "react";
import './colorchanger.scss';

function ColorChanger( {children} ) {
    // state to store main site color
    const [color, setColor] = useState("orange");

    const colorArr = ["orange", "purple", "green", "black"];

    // check is a color choice exists in local storage
    useEffect(() => {
        if (localStorage.getItem("color")) {
            setColor(localStorage.getItem("color"));
        }
    }, []);

    return (
        <div className={"color_changer_wrapper " + color}>
            <div className="change_bar">
                {colorArr.map((colorName) => {
                    return (
                        <div className={"color_button " + colorName} onClick={() => {
                            // set color state in color var and in local storage
                            setColor(colorName);
                            localStorage.setItem("color", colorName);
                        }}>{colorName}</div>
                    );
                })}
            </div>
            {children}
        </div>
    );
}

export default ColorChanger;
  
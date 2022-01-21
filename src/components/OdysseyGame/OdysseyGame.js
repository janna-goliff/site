import React, { useState } from "react";
import './odysseygame.scss';

function OdysseyGame () {
    // root navigation to image assets
    const stem = "/odysseyfutureimages/";
    
    // Image displayed on load
    const showImage = 'open/title.png';

    // state value to set displayed image
    const [dispImage, setDispImage] = useState(showImage);
    

    // mappings of which image leads to/from which
    const mappings = {
        // in format of imageName: [[previous frame], [option 1, option 2]]

        // prompt options
        // phone prompts
        'open/phone-prompts-1.png': {
            'isPrompt': true,
            'opt-num': 1,
            'total-opt': 4,
            'prev': 'open/wakeup3.png', 
            'next1': 'open/weather.png'},
        'open/phone-prompts-2.png': {
            'isPrompt': true,
            'opt-num': 2,
            'total-opt': 4,
            'prev': 'open/wakeup3.png', 
            'next1': 'open/newsa.png'},
        'open/phone-prompts-3.png': { 
            'isPrompt': true,
            'opt-num': 3,
            'total-opt': 4,
            'prev': 'open/wakeup3.png', 
            'next1': 'open/texts.png'},
        'open/phone-prompts-4.png': { 
            'isPrompt': true,
            'opt-num': 4,
            'total-opt': 4,
            'prev': 'open/wakeup3.png', 
            'next1': 'open/in-or-out-1.png'},

        // inside or ouside prompts
        'open/in-or-out-1.png': {
            'isPrompt': true,
            'opt-num': 1,
            'total-opt': 2,
            'prev': 'open/phone-prompts-4.png', 
            'next1': 'inside/inside-prompts-1.png'},
        'open/in-or-out-2.png': {
            'isPrompt': true,
            'opt-num': 2,
            'total-opt': 2,
            'prev': 'open/phone-prompts-4.png', 
            'next1': 'outside/walk1.png'},
        // inside activity options (watch holotoons, cook breakfast, do chores)
        'inside/inside-prompts-1.png': {
            'isPrompt': true,
            'opt-num': 1,
            'total-opt': 3,
            'prev': 'open/in-or-out-1.png',
            'next1': 'inside/cartoons/cartoons1_a.png'
        },
        'inside/inside-prompts-2.png': {
            'isPrompt': true,
            'opt-num': 2,
            'total-opt': 3,
            'prev': 'open/in-or-out-1.png',
            'next1': 'inside/breakfast/kitchen.png'
        },
        'inside/inside-prompts-3.png': {
            'isPrompt': true,
            'opt-num': 3,
            'total-opt': 3,
            'prev': 'open/in-or-out-1.png',
            'next1': 'inside/chores/trash-compactor1.png'
        },
        // outside walking directions prompts (school, protest, boardwalk)
        'outside/walk-prompt-1.png': {
            'isPrompt': true,
            'opt-num': 1,
            'total-opt': 3,
            'prev': 'outside/walk2.png',
            'next1': 'outside/school/school.png'
        },
        'outside/walk-prompt-2.png': {
            'isPrompt': true,
            'opt-num': 2,
            'total-opt': 3,
            'prev': 'outside/walk2.png',
            'next1': 'outside/protest/protest.png'
        },
        'outside/walk-prompt-3.png': {
            'isPrompt': true,
            'opt-num': 3,
            'total-opt': 3,
            'prev': 'outside/walk2.png',
            'next1': 'outside/boardwalk/boardwalk1.png'
        },
        // school prompt get closer (get closer or go back)
        'outside/school/school-prompt-1.png': {
            'isPrompt': true,
            'opt-num': 1,
            'total-opt': 2,
            'prev': 'outside/school/school4.png',
            'next1': 'outside/school/sign.png'
        },
        'outside/school/school-prompt-2.png': {
            'isPrompt': true,
            'opt-num': 2,
            'total-opt': 2,
            'prev': 'outside/school/school4.png',
            'next1': 'outside/walk-prompt-1.png'
        },
        // sign prompt (vandalize or go back)
        'outside/school/sign-prompt-1.png': {
            'isPrompt': true,
            'opt-num': 1,
            'total-opt': 2,
            'prev': 'outside/school/sign4.png',
            'next1': 'outside/school/vandalize1.png'
        },
        'outside/school/sign-prompt-2.png': {
            'isPrompt': true,
            'opt-num': 2,
            'total-opt': 2,
            'prev': 'outside/school/sign4.png',
            'next1': 'outside/walk-prompt-1.png'
        },
        // get closer to protest prompt
        'outside/protest/protest-closer-prompt-1.png': {
            'isPrompt': true,
            'opt-num': 1,
            'total-opt': 2,
            'prev': 'outside/protest/protest3.png',
            'next1': 'outside/protest/protest-closer.png'
        },
        'outside/protest/protest-closer-prompt-2.png': {
            'isPrompt': true,
            'opt-num': 2,
            'total-opt': 2,
            'prev': 'outside/protest/protest3.png',
            'next1': 'outside/walk-prompt-1.png'
        },
        // get closer to protest prompt
        'outside/protest/join-protest-prompt-1.png': {
            'isPrompt': true,
            'opt-num': 1,
            'total-opt': 2,
            'prev': 'outside/protest/protest-closer2.png',
            'next1': 'outside/protest/protest-closer-joined.png'
        },
        'outside/protest/join-protest-prompt-2.png': {
            'isPrompt': true,
            'opt-num': 2,
            'total-opt': 2,
            'prev': 'outside/protest/protest-closer2.png',
            'next1': 'outside/walk-prompt-1.png'
        },
        // go on pier
        'outside/boardwalk/boardwalk-prompts-1.png': {
            'isPrompt': true,
            'opt-num': 1,
            'total-opt': 2,
            'prev': 'outside/boardwalk/boardwalk-prompt.png',
            'next1': 'outside/boardwalk/pier1.png'
        },
        'outside/boardwalk/boardwalk-prompts-2.png': {
            'isPrompt': true,
            'opt-num': 2,
            'total-opt': 2,
            'prev': 'outside/boardwalk/boardwalk-prompt.png',
            'next1': 'outside/walk-prompt-1.png'
        },

        // title and intro screen options
        'open/title.png': {
            'prev': 'open/title.png',
            'next1': 'open/controls.png'},
        'open/controls.png': {
            'prev': 'open/title.png', 
            'next1': 'open/exposition.png'},
        'open/exposition.png': {
            'prev': 'open/controls.png', 
            'next1': 'open/wakeup1.png'},
        'open/wakeup1.png': {
            'prev': 'open/exposition.png', 
            'next1': 'open/wakeup2.png'},
        'open/wakeup2.png': {
            'prev': 'open/wakeup1.png', 
            'next1': 'open/wakeup3.png'},
        'open/wakeup3.png': {
            'prev': 'open/wakeup2.png', 
            'next1': 'open/wakeup-prompta.png'},
        'open/wakeup-prompta.png': {
            'prev': 'open/wakeup3.png', 
            'next1': 'open/phone-prompts-1.png'},
        // phone options
        'open/weather.png': {
            'prev': 'open/phone-prompts-1.png', 
            'next1': 'open/phone-prompts-1.png'},
        'open/newsa.png': {
            'prev': 'open/phone-prompts-2.png', 
            'next1': 'open/newsb.png'},
        'open/newsb.png': {
            'prev': 'open/newsa.png', 
            'next1': 'open/phone-prompts-2.png'},
        'open/texts.png': {
            'prev': 'open/phone-prompts-3.png', 
            'next1': 'open/phone-prompts-3.png'},
        // cartoon watching
        'inside/cartoons/cartoons1_a.png': {
            'prev': 'inside/inside-prompts-1.png',
            'next1': 'inside/cartoons/cartoons1_b.png',
        },
        'inside/cartoons/cartoons1_b.png': {
            'prev': 'inside/cartoons/cartoons1_a.png',
            'next1': 'inside/cartoons/cartoons1_c.png',
        },
        'inside/cartoons/cartoons1_c.png': {
            'prev': 'inside/cartoons/cartoons1_b.png',
            'next1': 'inside/inside-game-over.png',
        },
        // cook breakfast
        'inside/breakfast/kitchen.png': {
            'prev': 'inside/inside-prompts-2.png',
            'next1': 'inside/breakfast/kitchen2.png',
        },
        'inside/breakfast/kitchen2.png': {
            'prev': 'inside/breakfast/kitchen.png',
            'next1': 'inside/breakfast/kitchen3.png',
        },
        'inside/breakfast/kitchen3.png': {
            'prev': 'inside/breakfast/kitchen2.png',
            'next1': 'inside/breakfast/cabinet-contents.png',
        },
        'inside/breakfast/cabinet-contents.png': {
            'prev': 'inside/breakfast/kitchen3.png',
            'next1': 'inside/breakfast/cabinet-contents-thoughts.png',
        },
        'inside/breakfast/cabinet-contents-thoughts.png': {
            'prev': 'inside/breakfast/cabinet-contents.png',
            'next1': 'inside/inside-game-over.png',
        },
        // do chores
        'inside/chores/trash-compactor1.png': {
            'prev': 'inside/inside-prompts-3.png',
            'next1': 'inside/chores/trash-compactor2.png',
        },
        'inside/chores/trash-compactor2.png': {
            'prev': 'inside/chores/trash-compactor1.png',
            'next1': 'inside/chores/trash-compactor3.png',
        },
        'inside/chores/trash-compactor3.png': {
            'prev': 'inside/chores/trash-compactor2.png',
            'next1': 'inside/inside-game-over.png',
        },
        // game over inside
        'inside/inside-game-over.png': {
            'prev': 'inside/inside-game-over.png',
            'next1': 'open/exposition.png',
        },
        //
        // OUTSIDE
        //
        'outside/walk1.png': {
            'prev': 'open/in-or-out-2.png',
            'next1': 'outside/walk2.png'
        },
        'outside/walk2.png': {
            'prev': 'outside/walk1.png',
            'next1': 'outside/walk-prompt-1.png'
        },
        // school
        'outside/school/school.png': {
            'prev': 'outside/walk-prompt-1.png',
            'next1': 'outside/school/school2.png'
        },
        'outside/school/school2.png': {
            'prev': 'outside/school/school.png',
            'next1': 'outside/school/school3.png'
        },
        'outside/school/school3.png': {
            'prev': 'outside/school/school2.png',
            'next1': 'outside/school/school4.png'
        },
        'outside/school/school4.png': {
            'prev': 'outside/school/school3.png',
            'next1': 'outside/school/school-prompt-1.png'
        },
        'outside/school/sign.png': {
            'prev': 'outside/school/school-prompt-1.png',
            'next1': 'outside/school/sign2.png'
        },
        'outside/school/sign2.png': {
            'prev': 'outside/school/sign.png',
            'next1': 'outside/school/sign3.png'
        },
        'outside/school/sign3.png': {
            'prev': 'outside/school/sign2.png',
            'next1': 'outside/school/sign4.png'
        },
        'outside/school/sign4.png': {
            'prev': 'outside/school/sign4.png',
            'next1': 'outside/school/sign-prompt-1.png'
        },
        'outside/school/vandalize1.png': {
            'prev': 'outside/school/sign-prompt-1.png',
            'next1': 'outside/school/vandalize2.png'
        },
        'outside/school/vandalize2.png': {
            'prev': 'outside/school/vandalize1.png',
            'next1': 'outside/school/vandalize3.png'
        },
        'outside/school/vandalize3.png': {
            'prev': 'outside/school/vandalize2.png',
            'next1': 'outside/school/vandalize4.png'
        },
        'outside/school/vandalize4.png': {
            'prev': 'outside/school/vandalize3.png',
            'next1': 'outside/school/vandalize5.png'
        },
        'outside/school/vandalize5.png': {
            'prev': 'outside/school/vandalize4.png',
            'next1': 'outside/school/vandalize6.png'
        },
        'outside/school/vandalize6.png': {
            'prev': 'outside/school/vandalize5.png',
            'next1': 'outside/school/vandalize7.png'
        },
        'outside/school/vandalize7.png': {
            'prev': 'outside/school/vandalize6.png',
            'next1': 'outside/school/vandalize8.png'
        },
        'outside/school/vandalize8.png': {
            'prev': 'outside/school/vandalize7.png',
            'next1': 'outside/school/vandalize9.png'
        },
        'outside/school/vandalize9.png': {
            'prev': 'outside/school/vandalize8.png',
            'next1': 'outside/school/vandalize10.png'
        },
        'outside/school/vandalize10.png': {
            'prev': 'outside/school/vandalize9.png',
            'next1': 'outside/school/vandalize11.png'
        },
        'outside/school/vandalize11.png': {
            'prev': 'outside/school/vandalize10.png',
            'next1': 'outside/school/vandalize12.png'
        },
        'outside/school/vandalize12.png': {
            'prev': 'outside/school/vandalize11.png',
            'next1': 'outside/school/vandalize-walk.png'
        },
        'outside/school/vandalize-walk.png': {
            'prev': 'outside/school/vandalize12.png',
            'next1': 'outside/school/vandalize-walk2.png'
        },
        'outside/school/vandalize-walk2.png': {
            'prev': 'outside/school/vandalize-walk.png',
            'next1': 'outside/school/vandalize-walk3.png'
        },
        'outside/school/vandalize-walk3.png': {
            'prev': 'outside/school/vandalize-walk2.png',
            'next1': 'outside/school/game-over.png'
        },
        'outside/school/game-over.png': {
            'prev': 'outside/school/game-over.png',
            'next1': 'open/exposition.png'
        },
        // protest
        'outside/protest/protest.png': {
            'prev': 'outside/walk-prompt-2.png',
            'next1': 'outside/protest/protest2.png'
        },
        'outside/protest/protest2.png': {
            'prev': 'outside/protest/protest.png',
            'next1': 'outside/protest/protest3.png'
        },
        'outside/protest/protest3.png': {
            'prev': 'outside/protest/protest2.png',
            'next1': 'outside/protest/protest-closer-prompt-1.png'
        },
        'outside/protest/protest-closer.png': {
            'prev': 'outside/protest/protest-closer-prompt-1.png',
            'next1': 'outside/protest/protest-closer2.png'
        },
        'outside/protest/protest-closer2.png': {
            'prev': 'outside/protest/protest-closer.png',
            'next1': 'outside/protest/join-protest-prompt-1.png'
        },
        'outside/protest/protest-closer-joined.png': {
            'prev': 'outside/protest/join-protest-prompt-1.png',
            'next1': 'outside/protest/protest-closer-joined2.png'
        },
        'outside/protest/protest-closer-joined2.png': {
            'prev': 'outside/protest/protest-closer-joined.png',
            'next1': 'outside/protest/protest-text1.png'
        },
        'outside/protest/protest-text1.png': {
            'prev': 'outside/protest/protest-closer-joined2.png',
            'next1': 'outside/protest/protest-text2.png'
        },
        'outside/protest/protest-text2.png': {
            'prev': 'outside/protest/protest-text1.png',
            'next1': 'outside/protest/protest-text3.png'
        },
        'outside/protest/protest-text3.png': {
            'prev': 'outside/protest/protest-text2.png',
            'next1': 'outside/protest/protest-firing.png'
        },
        'outside/protest/protest-firing.png': {
            'prev': 'outside/protest/protest-text3.png',
            'next1': 'outside/protest/protest-firing2.png'
        },
        'outside/protest/protest-firing2.png': {
            'prev': 'outside/protest/protest-firing.png',
            'next1': 'outside/protest/protest-firing3.png'
        },
        'outside/protest/protest-firing3.png': {
            'prev': 'outside/protest/protest-firing2.png',
            'next1': 'outside/protest/protest-firing4.png'
        },
        'outside/protest/protest-firing4.png': {
            'prev': 'outside/protest/protest-firing3.png',
            'next1': 'outside/protest/protest-game-over.png'
        },
        'outside/protest/protest-game-over.png': {
            'prev': 'outside/protest/protest-game-over.png',
            'next1': 'open/exposition.png'
        },
        // boardwalk
        'outside/boardwalk/boardwalk1.png': {
            'prev': 'outside/walk-prompt-3.png',
            'next1': 'outside/boardwalk/boardwalk2.png'
        },
        'outside/boardwalk/boardwalk2.png': {
            'prev': 'outside/boardwalk/boardwalk1.png',
            'next1': 'outside/boardwalk/boardwalk3.png'
        },
        'outside/boardwalk/boardwalk3.png': {
            'prev': 'outside/boardwalk/boardwalk2.png',
            'next1': 'outside/boardwalk/boardwalk4.png'
        },
        'outside/boardwalk/boardwalk4.png': {
            'prev': 'outside/boardwalk/boardwalk3.png',
            'next1': 'outside/boardwalk/boardwalk5.png'
        },
        'outside/boardwalk/boardwalk5.png': {
            'prev': 'outside/boardwalk/boardwalk4.png',
            'next1': 'outside/boardwalk/boardwalk-prompt.png'
        },
        'outside/boardwalk/boardwalk-prompt.png': {
            'prev': 'outside/boardwalk/boardwalk5.png',
            'next1': 'outside/boardwalk/boardwalk-prompts-1.png'
        },
        'outside/boardwalk/pier1.png': {
            'prev': 'outside/boardwalk/boardwalk-prompts-1.png',
            'next1': 'outside/boardwalk/pier2.png'
        },
        'outside/boardwalk/pier2.png': {
            'prev': 'outside/boardwalk/pier1.png',
            'next1': 'outside/boardwalk/pier3.png'
        },
        'outside/boardwalk/pier3.png': {
            'prev': 'outside/boardwalk/pier2.png',
            'next1': 'outside/boardwalk/pier4.png'
        },
        'outside/boardwalk/pier4.png': {
            'prev': 'outside/boardwalk/pier3.png',
            'next1': 'outside/boardwalk/pier5.png'
        },
        'outside/boardwalk/pier5.png': {
            'prev': 'outside/boardwalk/pier4.png',
            'next1': 'outside/boardwalk/pier6.png'
        },
        'outside/boardwalk/pier6.png': {
            'prev': 'outside/boardwalk/pier5.png',
            'next1': 'outside/boardwalk/pier7.png'
        },
        'outside/boardwalk/pier7.png': {
            'prev': 'outside/boardwalk/pier6.png',
            'next1': 'outside/boardwalk/pier8.png'
        },
        'outside/boardwalk/pier8.png': {
            'prev': 'outside/boardwalk/pier7.png',
            'next1': 'outside/boardwalk/pier9.png'
        },
        'outside/boardwalk/pier9.png': {
            'prev': 'outside/boardwalk/pier8.png',
            'next1': 'outside/boardwalk/game-over-boardwalk.png'
        },
        'outside/boardwalk/game-over-boardwalk.png': {
            'prev': 'outside/boardwalk/game-over-boardwalk.png',
            'next1': 'open/exposition.png'
        },
    };

    function changeScene(direction) {
        console.log("clicked button, current dispImage: ", dispImage);
        if (direction === "up" && mappings[dispImage]?.isPrompt) {
            const promptIndex = mappings[dispImage]['opt-num'];
            const numOfPrompts = mappings[dispImage]['total-opt'];
            let nextOptionPromptIndex = promptIndex - 1;
            if (nextOptionPromptIndex === 0) {
                nextOptionPromptIndex = numOfPrompts;
            }
            setDispImage(dispImage.replace(promptIndex, nextOptionPromptIndex));
        }
        else if (direction === "down" && mappings[dispImage]?.isPrompt) {
            const promptIndex = mappings[dispImage]['opt-num'];
            const numOfPrompts = mappings[dispImage]['total-opt'];
            let nextOptionPromptIndex = promptIndex + 1;
            if (nextOptionPromptIndex > numOfPrompts) {
                nextOptionPromptIndex = 1;
            }
            setDispImage(dispImage.replace(promptIndex, nextOptionPromptIndex));
        }
        else if (direction === "forward") {
            setDispImage(mappings[dispImage]['next1']);
        }
        else if (direction === "back") {
            setDispImage(mappings[dispImage]['prev']);
        }
    }

    return (
        <div className="odyssey_controller">
            <div className="joystick_buttons">
                <div className="joy_button none"></div>
                <div className="joy_button up" onClick={() => changeScene("up")}>
                    <div></div>
                </div>
                <div className="joy_button none"></div>

                <div className="joy_button left" onClick={() => changeScene("up")}>
                    <div></div>
                </div>
                <div className="joy_button center"></div>
                <div className="joy_button right" onClick={() => changeScene("down")}>
                    <div></div>
                </div>

                <div className="joy_button none"></div>
                <div className="joy_button down" onClick={() => changeScene("down")}>
                    <div></div>
                </div>
                <div className="joy_button none"></div>
            </div>
            <img src={process.env.PUBLIC_URL + stem + dispImage} alt={dispImage} className="image"></img>
            <div className="ab_buttons">
                <div className="ab_button none"></div>
                <div className="ab_button forward" onClick={() => changeScene("forward")}>A</div>
                
                <div className="ab_button back" onClick={() => changeScene("back")}>B</div>
                <div className="ab_button none"></div>
            </div>
        </div>
    );
}

export default OdysseyGame;
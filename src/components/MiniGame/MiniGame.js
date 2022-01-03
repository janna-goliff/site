import React, { useEffect, useState } from "react";
import './minigame.scss';

/**
 * Component for rendering a mini game
 */
function MiniGame(props) {
    const arr = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0],
    ];
    const [position, setPosition] = useState(arr);
    
    return (
        <div className="game_container">
           {
               position.map((row, rowNum) => {
                   return (
                       <div className="row">
                           {row.map((coordinate, colNum) => {
                                return (
                                    <div className={"coordinate " + coordinate === 1 ? " current" : ""}></div>
                                );
                            })
                        }
                       </div>
                   );
               })
           }
        </div>
    );
}

export default MiniGame;
  
import React, { useEffect, useState } from "react";
import './minigame.scss';

/**
 * Component for rendering a mini game
 */
function MiniGame(props) {
    const arr = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    const [arrState, setArrState] = useState(arr);
    const [rowPos, setRowPos] = useState(3);
    const [colPos, setColPos] = useState(0);

    function move(direction) {
        console.log("row: ", rowPos);
        console.log("col: ", colPos);
        const rowCopy = rowPos;
        const colCopy = colPos;
        // move up if in bounds
        if (direction === "KeyW" && rowPos > 0) {
            console.log("UP");
            setRowPos(rowCopy - 1);
        }
        // move down if in bounds
        else if (direction === "KeyS" && rowPos < arr.length) {
            console.log("DOWN");
            setRowPos(rowCopy + 1);
        }
        // move left if in bounds
        else if (direction === "KeyA" && colPos > 0) {
            console.log("LEFT");
            setColPos(colCopy - 1);
        }
        // move right if in bounds
        else if (direction === "KeyD" && colPos < arr[0].length) {
            console.log("RIGHT to: ", colCopy + 1);
            setColPos(colCopy + 1);
            console.log("now at: ", + rowPos + ", " + colPos);
        }
    }

    
    document.addEventListener('keyup', (e) => {
        console.log(e.code);
        move(e.code);
    });
    

    useEffect(() => {
        console.log(" columns: ", arr[0].length );
        console.log(" rows: ", arr.length );
        
    }, []);

    useEffect(() => {
        console.log("Row changed: ", rowPos)
    }, [rowPos]);
    useEffect(() => {
        console.log("Col changed: ", colPos)
    }, [colPos]);

    return (
        <div className="game_container">
           {
               arrState.map((row, rowNum) => {
                   return (
                       <div className="row">
                           {row.map((coordinate, colNum) => {
                               return (
                                   (rowPos === rowNum) && (colPos === colNum) ?
                                    <div className={"coordinate"}></div>
                                    :
                                    <div className={"coordinate current"}></div>
                                )
                            }
                           )}
                       </div>
                   );
               })
           }
        </div>
    );
}

export default MiniGame;
  
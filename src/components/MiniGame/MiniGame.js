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

    const [position, setPosition] = useState({
        row: 3,
        col: 0,
    });
    // const [arrState, setArrState] = useState(arr);
    // const [rowPos, setRowPos] = useState(3);
    // const [colPos, setColPos] = useState(0);

    function move(direction) {
        console.log("row: ", position.row);
        console.log("col: ", position.col);
        const rowCopy = position.row;
        const colCopy = position.col;
        // move up if in bounds
        if (direction === "KeyW" && rowCopy > 0) {
            console.log("UP");
            setPosition({
                row: rowCopy - 1,
                col: colCopy,
            });
        }
        // move down if in bounds
        else if (direction === "KeyS" && rowCopy < arr.length) {
            console.log("DOWN");
            setPosition({
                row: rowCopy + 1,
                col: colCopy,
            });
        }
        // move left if in bounds
        else if (direction === "KeyA" && colCopy > 0) {
            console.log("LEFT");
            setPosition({
                row: rowCopy,
                col: colCopy - 1,
            });
        }
        // move right if in bounds
        else if (direction === "KeyD" && colCopy < arr[0].length) {
            console.log("RIGHT to: ", colCopy + 1);
            setPosition({
                row: rowCopy,
                col: colCopy + 1,
            });
        }
    }

    
    document.addEventListener('keydown', (e) => {
        console.log(e.code);
        move(e.code);
    });
    

    useEffect(() => {
        console.log(" columns: ", arr[0].length );
        console.log(" rows: ", arr.length );
        
    }, []);

    useEffect(() => {
        console.log("Row : ", position.row, "column: ", position.col);
    }, [position]);

    return (
        <div className="game_container">
           {
               arr.map((row, rowNum) => {
                   return (
                       <div key={rowNum + "coord"} className="row">
                           {row.map((coordinate, colNum) => {
                               return (
                                   (position.row === rowNum) && (position.col === colNum) ?
                                    <div key={colNum + "coord"} className={"coordinate"}></div>
                                    :
                                    <div key={colNum + "curr_coord"} className={"coordinate current"}></div>
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
  
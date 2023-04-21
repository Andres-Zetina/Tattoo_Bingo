import React from "react";
import TattooSquare from "./TattooSquare";  



function SavedBoards({ savedBoards, handleSquareChange }) {
    return (
      <div className="saved-boards">
        {savedBoards.map((savedBoard, boardIndex) => (
          <div key={boardIndex} className="board">
            {savedBoard.squares.map((square, squareIndex) => (
              <TattooSquare
                key={squareIndex}
                index={squareIndex}
                value={square}
                isEditable={false}
                isSelected={savedBoard.selectedSquares.has(squareIndex)}
                onChange={() => handleSquareChange(boardIndex, squareIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SavedBoards;


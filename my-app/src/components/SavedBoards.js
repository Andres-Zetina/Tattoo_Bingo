import React from 'react';
import TattooSquare from './TattooSquare';
// import '../styling/SavedBoards.css';

function SavedBoards({ savedBoards, setSavedBoards }) {
  const handleClick = (index, boardIndex) => {
    const newSavedBoards = [...savedBoards];
    if (newSavedBoards[boardIndex].selectedSquares.includes(index)) {
      const newSelectedSquares = newSavedBoards[boardIndex].selectedSquares.filter(i => i !== index);
      newSavedBoards[boardIndex].selectedSquares = newSelectedSquares;
    } else {
      newSavedBoards[boardIndex].selectedSquares.push(index);
    }
    setSavedBoards(newSavedBoards);
    localStorage.setItem('savedBoards', JSON.stringify(newSavedBoards));
  };

  const removeBoard = (index)  => {
    const newBoards = savedBoards.filter((board, i) => i !== index);
    setSavedBoards(newBoards);
    localStorage.setItem('savedBoards', JSON.stringify(newBoards));
  }

  return (
    <div className="SavedBoards">
      {savedBoards.map((savedBoard, boardIndex) => (
        <div className="board-container" key={boardIndex}>
          <div className="board">
            {savedBoard.squares.map((square, index) => (
              <TattooSquare
                key={index}
                index={index}
                value={square}
                isEditable={false}
                isSelected={savedBoard.selectedSquares.includes(index)}
                onChange={() => handleClick(index, boardIndex)}
              />
            ))}
          </div>
          <button className='rmv' onClick={() => removeBoard(boardIndex)}>Remove</button>
        </div>
      ))}
    </div>
  );

}

export default SavedBoards;

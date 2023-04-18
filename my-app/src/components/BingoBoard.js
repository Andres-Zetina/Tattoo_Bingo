import React, { useState } from 'react';
import TattooSquare from './TattooSquare';
import '../styling/BingoBoard.css';

const tattooIdeas = [
  'Skull',
  'Rose',
  'Anchor',
  'Dragon',
  'Heart',
];

function BingoBoard() {
  const [squares, setSquares] = useState(Array(25).fill(''));
  const [isEditable, setIsEditable] = useState(true);
  const [savedBoards, setSavedBoards] = useState([]);

  const saveBoard = () => {
    setSavedBoards([...savedBoards, { squares: squares.slice(), selectedSquares: new Set() }]);
  };

  const generateRandomBoard = () => {
    setIsEditable(false);
    const randomSquares = [];
    for (let i = 0; i < 25; i++) {
      randomSquares.push(tattooIdeas[Math.floor(Math.random() * tattooIdeas.length)]);
    }
    setSquares(randomSquares);
  };

  const handleSquareChange = (boardIndex, squareIndex) => {
    if (!isEditable) {
      const newSavedBoards = savedBoards.slice();
      const selectedSquares = newSavedBoards[boardIndex].selectedSquares;
      if (selectedSquares.has(squareIndex)) {
        selectedSquares.delete(squareIndex);
      } else {
        selectedSquares.add(squareIndex);
      }
      setSavedBoards(newSavedBoards);
    }
  };

  return (
    <div className="BingoBoard">
      <div className="board">
        {squares.map((square, index) => (
          <TattooSquare
            key={index}
            index={index}
            value={square}
            isEditable={isEditable}
            isSelected={false}
            onChange={() => {}}
          />
        ))}
      </div>
      <button onClick={generateRandomBoard}>Randomize</button>
      <button onClick={saveBoard}>Save</button>
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
    </div>
  );
}

export default BingoBoard;

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
  const [selectedSquares, setSelectedSquares] = useState(new Set());

  const saveBoard = () => {
    setSavedBoards([...savedBoards, squares.slice()]);
  };

  const generateRandomBoard = () => {
    setIsEditable(false);
    const randomSquares = [];
    for (let i = 0; i < 25; i++) {
      randomSquares.push(tattooIdeas[Math.floor(Math.random() * tattooIdeas.length)]);
    }
    setSquares(randomSquares);
  };

  const handleSquareChange = (index, newValue, isSelecting = false) => {
    if (isEditable) {
      const newSquares = squares.slice();
      newSquares[index] = newValue;
      setSquares(newSquares);
    } else if (isSelecting) {
      const newSelectedSquares = new Set(selectedSquares);
      if (selectedSquares.has(index)) {
        newSelectedSquares.delete(index);
      } else {
        newSelectedSquares.add(index);
      }
      setSelectedSquares(newSelectedSquares);
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
            isSelected={selectedSquares.has(index)}
            onChange={handleSquareChange}
          />
        ))}
      </div>
      <button onClick={generateRandomBoard}>Randomize</button>
      <button onClick={saveBoard}>Save</button>
      <div className="saved-boards">
        {savedBoards.map((savedBoard, idx) => (
          <div key={idx} className="board">
            {savedBoard.map((square, index) => (
              <TattooSquare
                key={index}
                index={index}
                value={square}
                isEditable={false}
                isSelected={false}
                onChange={() => {}}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BingoBoard;

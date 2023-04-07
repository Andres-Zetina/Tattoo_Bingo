import React, { useState } from 'react';
import TattooSquare from './TattooSquare';
import '../styling/BingoBoard.css'

// Sample list of tattoo ideas
const tattooIdeas = [
  'Skull',
  'Rose',
  'Anchor',
  'Dragon',
  'Heart',
  // Add more ideas here
];

function BingoBoard() {
  const [squares, setSquares] = useState(Array(25).fill(''));
  const [isEditable, setIsEditable] = useState(true);

  const generateRandomBoard = () => {
    setIsEditable(false);
    const randomSquares = [];
    for (let i = 0; i < 25; i++) {
      randomSquares.push(tattooIdeas[Math.floor(Math.random() * tattooIdeas.length)]);
    }
    setSquares(randomSquares);
  };

  const handleSquareChange = (index, newValue) => {
    if (isEditable) {
      const newSquares = squares.slice();
      newSquares[index] = newValue;
      setSquares(newSquares);
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
            onChange={handleSquareChange}
          />
        ))}
      </div>
      <button onClick={generateRandomBoard}>Randomize</button>
    </div>
  );
}

export default BingoBoard;

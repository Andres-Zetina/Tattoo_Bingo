import React, { useState } from 'react';
import TattooSquare from './TattooSquare';
import '../styling/BingoBoard.css';

// Sample list of tattoo ideas
const tattooIdeas = [
  'Skull',
  'Rose',
  'Anchor',
  'Dragon',
  'Heart',
  // Add more ideas here
];

function BingoBoard({ savedBoards, setSavedBoards }) {
  const [squares, setSquares] = useState(Array(25).fill(''));
  const [isEditable, setIsEditable] = useState(true);
  const [selectedSquare, setSelectedSquare] = useState(new Set());

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

  const handleSquareChange = (index, newValue) => {
    if (isEditable) {
      const newSquares = squares.slice();
      newSquares[index] = newValue;
      setSquares(newSquares);
    } else {
      const newSelectedSquare = new Set(selectedSquare);
      if (selectedSquare.has(index)) {
        newSelectedSquare.delete(index);
      } else {
        newSelectedSquare.add(index);
      }
      setSelectedSquare(newSelectedSquare);
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
            isSelected={selectedSquare.has(index)}
            onChange={handleSquareChange}
          />
        ))}
      </div>
      <button onClick={generateRandomBoard}>Randomize</button>
      <br></br>
      <button onClick={saveBoard}>Save</button>
    </div>
  );
}

export default BingoBoard;

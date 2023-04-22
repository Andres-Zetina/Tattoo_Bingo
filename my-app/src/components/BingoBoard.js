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
    const initialSquares = Array(25).fill('');
    initialSquares[12] = 'Bingo!';

  const [squares, setSquares] = useState(initialSquares);
  const [isEditable, setIsEditable] = useState(true);
  const [selectedSquare, setSelectedSquare] = useState(new Set());

  const saveBoard = () => {
    setSavedBoards([...savedBoards, { squares: squares.slice(), selectedSquares: new Set() }]);
  };

  const generateRandomBoard = () => {
    setIsEditable(false);
    const randomSquares = [];
    for (let i = 0; i < 25; i++) {
      if(i === 12) {
        randomSquares.push('Bingo!');
      } else {
        randomSquares.push(tattooIdeas[Math.floor(Math.random() * tattooIdeas.length)])
      }
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
    <div className="BingoBoardWrapper">
      <div className="board">
        {squares.map((square, index) => (
          <TattooSquare
            key={index}
            index={index}
            value={square}
            isEditable={isEditable && index !== 12}
            isSelected={index === 12 || selectedSquare.has (index)}
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

import React, { useState, useEffect } from 'react';
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
  const [selectedSquare, setSelectedSquare] = useState([]);

  useEffect(() => {
    const loadedBoards = localStorage.getItem('savedBoards');
    if (loadedBoards) {
      const parsedBoards = JSON.parse(loadedBoards);
      parsedBoards.forEach(board => board.selectedSquares = Array.from(board.selectedSquares));
      setSavedBoards(parsedBoards);
    }
  }, []);

  const saveBoard = () => {
    const newSavedBoards = [...savedBoards, { squares: squares.slice(), selectedSquares: selectedSquare.slice() }];
    setSavedBoards(newSavedBoards);
    localStorage.setItem('savedBoards', JSON.stringify(newSavedBoards));
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
      const newSelectedSquare = [...selectedSquare];
      const selectedIndex = newSelectedSquare.indexOf(index);
      if (selectedIndex !== -1) {
        newSelectedSquare.splice(selectedIndex, 1);
      } else {
        newSelectedSquare.push(index);
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
            isSelected={index === 12 || selectedSquare.includes(index)}
            onChange={handleSquareChange}
          />
        ))}
      </div>
      <div className='buttons'>
        <button onClick={generateRandomBoard}>Randomize</button>
        <button onClick={saveBoard}>Save</button>
      </div>
    </div>
  );
}

export default BingoBoard;

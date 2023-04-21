// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BingoBoard from './components/BingoBoard';
import SavedBoards from './components/SavedBoards';


function App() {
  const [savedBoards, setSavedBoards] = useState([]);
  const handleSquareChange = (boardIndex, squareIndex) => {
    const newSavedBoards = savedBoards.slice();
    const selectedSquares = newSavedBoards[boardIndex].selectedSquares;
    if (selectedSquares.has(squareIndex)) {
      selectedSquares.delete(squareIndex);
    } else {
      selectedSquares.add(squareIndex);
    }
    setSavedBoards(newSavedBoards);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to Tattoo Bingo!</h1>} index />
          <Route
            path="/create"
            element={<BingoBoard savedBoards={savedBoards} setSavedBoards={setSavedBoards} />}
          />
          <Route
            path="/saved"
            element={<SavedBoards savedBoards={savedBoards} handleSquareChange={handleSquareChange} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

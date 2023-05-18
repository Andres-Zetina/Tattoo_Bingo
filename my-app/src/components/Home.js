// Home.js
import React from 'react';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to Tattoo Bingo!</h1>
      <p>To play Tattoo Bingo, follow these simple steps:</p>
      <ol>
        <li>Go to the Create tab to create your bingo board.</li>
        <li>Click on the squares to select a tattoo idea or generate random ideas.</li>
        <li>Once you're happy with your board, click save to save your board.</li>
        <li>Go to the Saved tab to view and edit your saved boards.</li>
        <li>Click on the squares on your saved board to mark them as done.</li>
        <li>Try to get five in a row, column, or diagonal. Good luck!</li>
      </ol>
    </div>
  );
}

export default Home;

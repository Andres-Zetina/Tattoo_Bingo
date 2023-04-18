import React from 'react';
import '../styling/TattooSquare.css';

function TattooSquare({ index, value, isEditable, isSelected, onChange }) {
  const handleChange = (event) => {
    onChange(index, event.target.value);
  };

  const handleClick = () => {
    onChange(index, value, true);
  };

  return (
    <div
      className={`TattooSquare ${isSelected ? 'selected' : ''}`}
      onClick={isEditable ? null : handleClick}
    >
      {isEditable ? (
        <input type="text" value={value} onChange={handleChange} />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export default TattooSquare;

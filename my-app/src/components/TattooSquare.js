import React from 'react';
import '../styling/TattooSquare.css';

function TattooSquare({ index, value, isEditable, isSelected, onChange,}) {
  const handleClick = () => {
    onChange(index, value, true);
  };

  const handleChange = (event) => {
    onChange(index, event.target.value);
  };

  return (
    <input
      className={`TattooSquare ${isSelected ? 'selected' : ''}`}
      type="text"
      value={value}
      readOnly={!isEditable}
      onChange={handleChange}
      onClick={isEditable ? null : handleClick}
    />
  );
}

export default TattooSquare;

import React from 'react';
import '../styling/TattooSquare.css';

function TattooSquare({ index, value, isEditable, onChange }) {
  const handleChange = (event) => {
    onChange(index, event.target.value);
  };

  return (
    <input
      className="TattooSquare"
      type="text"
      value={value}
      readOnly={!isEditable}
      onChange={handleChange}
    />
  );
}

export default TattooSquare;

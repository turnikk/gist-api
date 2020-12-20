import React, { useState } from 'react';
import './index.css';

const SearchBox = ({ onChangeSearch }) => {
  const [text, setText] = useState('');

  const handleClick = (ev) => {
    const { currentTarget } = ev;
      setText(currentTarget.value);
  };

  const handleChange = () => onChangeSearch(text);

  return (
    <div>
      <input onChange={handleClick} className="search-box" type="text" />
      <div>
        <button onClick={handleChange} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;

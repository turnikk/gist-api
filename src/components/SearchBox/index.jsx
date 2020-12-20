import React from 'react';
import './index.css';
const SearchBox = ({ onChangeSearch }) => {
  return <input className="search-box" onChange={onChangeSearch} type="text" />;
};

export default SearchBox;

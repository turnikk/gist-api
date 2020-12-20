import React, { useState } from 'react';
import GistList from '../GistList';
import SearchBox from '../SearchBox';
import './index.css';

const GistContainer = () => {
  const [userName, setUserName] = useState();
  const [page, setPage] = useState();

  const onChangeUserName = (userName) => {
    setUserName(userName);
    setPage(1);
  };

  const onArrowClick = () => {
    setPage(page + 1);
  };

  return (
    <React.Fragment>
      <SearchBox onChangeSearch={onChangeUserName} />
      <GistList userName={userName} page={page} />
      <div>
        <i onClick={onArrowClick} className="arrow" />
      </div>
    </React.Fragment>
  );
};

export default GistContainer;

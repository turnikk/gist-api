import React from 'react';
import './index.css';

const GistFileBadge = ({ fileData }) => {
  const { filename, type: fileType, language, raw_url: url, size } = fileData;
  const filenameArr = filename.split('.');
  const extension = filenameArr[filenameArr.length - 1];
  return (
    <div className="gist-file-badge tooltip">
      <span className={`fiv-sqo fiv-icon-blank fiv-icon-${extension}`} />
      <div className="gist-file-badge-info tooltiptext">{filename}</div>
      <div className="gist-file-badge-info">{`${extension}, ${fileType}`}</div>
      <div className="gist-file-badge-info">{size}kb</div>
    </div>
  );
};

export default GistFileBadge;

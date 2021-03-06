import React from 'react';
import './index.css';
import GistFileBadge from '../GistFileBadge';

const GistCard = ({ gistData }) => {
  const {
    created_at: createdAt,
    updated_at: updatedAt,
    id: gistId,
    comments,
    description,
    files,
    forksImgs,
  } = gistData;

  const createdDate = new Date(createdAt).toLocaleString();
  const updatedDate = new Date(updatedAt).toLocaleString();

  const renderedBadges = Object.keys(files).map((name) => (
    <GistFileBadge fileData={files[name]} key={name} />
  ));
  const renderedAvatars = forksImgs.map((url) => (
    <img src={url} alt={url} className="avatar" key={url} />
  ));

  return (
    <div>
      <div className="gist-info">
        <div className="gist-descr">{description}</div>
        <div className="gist-id small">ID: {gistId}</div>
        <div className="gist-created_at small">Created: {createdDate}</div>
        <div className="gist-updated_at small">Updated: {updatedDate}</div>
        <div className="gist-comments-count small">Comments: {comments}</div>
      </div>
      <div className="gist-files">{renderedBadges}</div>
      {!!renderedAvatars.length && (
        <div className="gist-forks">
          <span className="forks-label small">Forks:</span>
          {renderedAvatars}
        </div>
      )}
    </div>
  );
};

export default GistCard;

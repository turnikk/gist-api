import React, { useEffect, useState } from 'react';
import GistCard from '../GistCard';
import { getGistsData } from '../../utils/httpClient';

const limit = 5;
const defaultMsg = 'Gists will be appearing here...';

const GistList = ({ userName = '', page = 1 }) => {
  const [gistsCollection, setGistsCollection] = useState([]);
  const [msg, setMsg] = useState(defaultMsg);

  useEffect(() => {
    const getGistsByUser = async () => {
      setMsg(defaultMsg);

      try {
        const { data } = await getGistsData(userName, limit, page);

        setGistsCollection(page > 1 ? gistsCollection.concat(data) : data);

        setMsg(data.length ? '' : `This user doesn't have Gists yet!`);
      } catch (err) {
        setMsg(`User ${userName} not found`);
      }
    };
    if (userName && userName.length > 2) {
      getGistsByUser();
    }
  }, [userName, page]);

  const renderedGists = gistsCollection.map((gist) => (
    <GistCard gistData={gist} key={gist.id} />
  ));

  return (
    <div className="container">
      {renderedGists.length ? renderedGists : msg}
    </div>
  );
};

export default GistList;

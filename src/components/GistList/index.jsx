import React, { useEffect, useState } from 'react';
import GistCard from '../GistCard';
import {getGistForks, getGistsData} from '../../utils/httpClient';

const limit = 5;
const defaultMsg = 'Gists will be appearing here...';

const forks = [
  {
    url: 'https://api.github.com/gists/3fcf7d0d4e24445b7cb61375405558b9',
    forks_url:
      'https://api.github.com/gists/3fcf7d0d4e24445b7cb61375405558b9/forks',
    commits_url:
      'https://api.github.com/gists/3fcf7d0d4e24445b7cb61375405558b9/commits',
    id: '3fcf7d0d4e24445b7cb61375405558b9',
    node_id: 'MDQ6R2lzdDNmY2Y3ZDBkNGUyNDQ0NWI3Y2I2MTM3NTQwNTU1OGI5',
    git_pull_url:
      'https://gist.github.com/3fcf7d0d4e24445b7cb61375405558b9.git',
    git_push_url:
      'https://gist.github.com/3fcf7d0d4e24445b7cb61375405558b9.git',
    html_url: 'https://gist.github.com/3fcf7d0d4e24445b7cb61375405558b9',
    files: {},
    public: true,
    created_at: '2017-12-02T17:59:49Z',
    updated_at: '2017-12-02T17:59:49Z',
    description: 'Recursive Laravel Collection Macros',
    comments: 0,
    user: null,
    comments_url:
      'https://api.github.com/gists/3fcf7d0d4e24445b7cb61375405558b9/comments',
    owner: {
      login: 'ddavaham',
      id: 7141998,
      node_id: 'MDQ6VXNlcjcxNDE5OTg=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/7141998?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ddavaham',
      html_url: 'https://github.com/ddavaham',
      followers_url: 'https://api.github.com/users/ddavaham/followers',
      following_url:
        'https://api.github.com/users/ddavaham/following{/other_user}',
      gists_url: 'https://api.github.com/users/ddavaham/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/ddavaham/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ddavaham/subscriptions',
      organizations_url: 'https://api.github.com/users/ddavaham/orgs',
      repos_url: 'https://api.github.com/users/ddavaham/repos',
      events_url: 'https://api.github.com/users/ddavaham/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/ddavaham/received_events',
      type: 'User',
      site_admin: false,
    },
  },
  {
    url: 'https://api.github.com/gists/63c86c64de35806902f54bceebeaf79c',
    forks_url:
      'https://api.github.com/gists/63c86c64de35806902f54bceebeaf79c/forks',
    commits_url:
      'https://api.github.com/gists/63c86c64de35806902f54bceebeaf79c/commits',
    id: '63c86c64de35806902f54bceebeaf79c',
    node_id: 'MDQ6R2lzdDYzYzg2YzY0ZGUzNTgwNjkwMmY1NGJjZWViZWFmNzlj',
    git_pull_url:
      'https://gist.github.com/63c86c64de35806902f54bceebeaf79c.git',
    git_push_url:
      'https://gist.github.com/63c86c64de35806902f54bceebeaf79c.git',
    html_url: 'https://gist.github.com/63c86c64de35806902f54bceebeaf79c',
    files: {},
    public: true,
    created_at: '2017-12-14T03:51:41Z',
    updated_at: '2017-12-14T03:51:41Z',
    description: 'Recursive Laravel Collection Macros',
    comments: 0,
    user: null,
    comments_url:
      'https://api.github.com/gists/63c86c64de35806902f54bceebeaf79c/comments',
    owner: {
      login: 'wploey',
      id: 16448892,
      node_id: 'MDQ6VXNlcjE2NDQ4ODky',
      avatar_url: 'https://avatars0.githubusercontent.com/u/16448892?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/wploey',
      html_url: 'https://github.com/wploey',
      followers_url: 'https://api.github.com/users/wploey/followers',
      following_url:
        'https://api.github.com/users/wploey/following{/other_user}',
      gists_url: 'https://api.github.com/users/wploey/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/wploey/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/wploey/subscriptions',
      organizations_url: 'https://api.github.com/users/wploey/orgs',
      repos_url: 'https://api.github.com/users/wploey/repos',
      events_url: 'https://api.github.com/users/wploey/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/wploey/received_events',
      type: 'User',
      site_admin: false,
    },
  },
  {
    url: 'https://api.github.com/gists/c633bb22cf2adac5d024c3f4c86f4ea8',
    forks_url:
      'https://api.github.com/gists/c633bb22cf2adac5d024c3f4c86f4ea8/forks',
    commits_url:
      'https://api.github.com/gists/c633bb22cf2adac5d024c3f4c86f4ea8/commits',
    id: 'c633bb22cf2adac5d024c3f4c86f4ea8',
    node_id: 'MDQ6R2lzdGM2MzNiYjIyY2YyYWRhYzVkMDI0YzNmNGM4NmY0ZWE4',
    git_pull_url:
      'https://gist.github.com/c633bb22cf2adac5d024c3f4c86f4ea8.git',
    git_push_url:
      'https://gist.github.com/c633bb22cf2adac5d024c3f4c86f4ea8.git',
    html_url: 'https://gist.github.com/c633bb22cf2adac5d024c3f4c86f4ea8',
    files: {},
    public: true,
    created_at: '2018-01-22T11:47:38Z',
    updated_at: '2018-01-22T11:47:38Z',
    description: 'Recursive Laravel Collection Macros',
    comments: 0,
    user: null,
    comments_url:
      'https://api.github.com/gists/c633bb22cf2adac5d024c3f4c86f4ea8/comments',
    owner: {
      login: 'RichiUfo',
      id: 20659123,
      node_id: 'MDQ6VXNlcjIwNjU5MTIz',
      avatar_url: 'https://avatars3.githubusercontent.com/u/20659123?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/RichiUfo',
      html_url: 'https://github.com/RichiUfo',
      followers_url: 'https://api.github.com/users/RichiUfo/followers',
      following_url:
        'https://api.github.com/users/RichiUfo/following{/other_user}',
      gists_url: 'https://api.github.com/users/RichiUfo/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/RichiUfo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/RichiUfo/subscriptions',
      organizations_url: 'https://api.github.com/users/RichiUfo/orgs',
      repos_url: 'https://api.github.com/users/RichiUfo/repos',
      events_url: 'https://api.github.com/users/RichiUfo/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/RichiUfo/received_events',
      type: 'User',
      site_admin: false,
    },
  },
];

const GistList = ({ userName = '', page = 1 }) => {
  const [gistsCollection, setGistsCollection] = useState([]);
  const [msg, setMsg] = useState(defaultMsg);

  useEffect(() => {
    const getGistsByUser = async () => {
      setMsg(defaultMsg);

      try {
        const { data } = await getGistsData(userName, limit, page);
        const forksData = await Promise.all(data.map(gist => {
          return getGistForks(gist.id);
        }));

        data.forEach((dataItem, i) => {
          dataItem.forksImgs = forksData[i].data.map((item) => item?.owner?.avatar_url);
        })

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

import axios from 'axios';

const timeout = 10000;

const httpClient = axios.create({
  baseURL: `https://api.github.com`,
  timeout,
});

export const getGistsData = (username, limit = 20, page = 1) =>
  httpClient.get(`/users/${username}/gists`, {
    params: {
      per_page: limit,
      page,
    },
  });

export const getGistForks = (id, limit = 3, page = 1) =>
  httpClient.get(`/gists/${id}/forks`, {
    params: {
      per_page: limit,
      page,
    },
  });

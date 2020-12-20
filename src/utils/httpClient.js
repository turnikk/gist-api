import axios from 'axios';

const timeout = 10000;

const httpClient = axios.create({
  baseURL: `https://api.github.com`,
  timeout,
});

export const getGistsData = (username, limit = 20, page) =>
  httpClient.get(`/users/${username}/gists`, {
    params: {
      per_page: limit,
      page,
    }
  });

import axios from 'axios';

export const fetcher = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

export const fetcherForManyUrl = async (urls: string[]) => {
  const requests = urls.map(async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  const results = await Promise.all(requests);
  return results;
};

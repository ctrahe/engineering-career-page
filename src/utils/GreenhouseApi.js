import isomorphicFetch from 'isomorphic-fetch';

export const getJobAds = () => {
    const url = 'https://api.greenhouse.io/v1/boards/scout24/jobs?content=true';
    return isomorphicFetch(url)
        .then(response => response.json());
};
import isomorphicFetch from 'isomorphic-fetch';

export const getEngineeringJobAds = () => {
    const url = 'https://api.greenhouse.io/v1/boards/scout24/jobs?content=true';
    return isomorphicFetch(url)
        .then(response => response.json())
        .then(jobs => jobs.jobs.filter(jobAd => jobAd.departments.some(department => department.name === 'Technology')));
}
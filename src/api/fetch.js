import fetch from 'isomorphic-fetch';

export const Fetch = (fetch) => (url, ...options) => {
    return fetch(url, {
        ...options
    });
}

export const secureFetch = (url) => {
    return Fetch(fetch)(url)
        .then(res => res.json())
}

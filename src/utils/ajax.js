import formatGetUrl from './formatGetUrl';

export default function ajax(config) {
  let method = config.method ? config.method.toUpperCase() : 'GET';
  let url, customConfig = {};

  if (method === 'GET') {
    url = formatGetUrl(config.url, config.data);
  } else {
    url = config.url;
    customConfig.body = JSON.stringify(config.data);
  }

  // Remove config properties that are formatted by this function
  delete config.url;
  delete config.data;
  delete config.method;

  return fetch(url, {
    method,
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }),
    ...customConfig,
    ...config
  });
};

import fetchDefaults from 'fetch-defaults';
import Cookies from "js-cookie"; 

export const apiFetch = function(url, data) {
  const serverUrl = 'https://reqres.in';

  return fetchDefaults(window.fetch, serverUrl, {
    headers: getAuthHeader(),
  })(url, data);
};

export const apiFetch2 = function(url, data) {
  const serverUrl = 'https://reqres.in';

  return fetchDefaults(window.fetch, serverUrl, {
    headers: getAuthHeader2(),
  })(url, data);
};
// export const apiFetch = fetchDefaults(
//   window.fetch,
//   ,{
//     headers:getAuthHeader(),
//   }
// );
function getAuthHeader() {
  if (Cookies.get('token') != null || Cookies.get('token') != undefined) {
    const token = Cookies.get('token');
    console.log(token)
    return {
      Authorization: `${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
  }
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
}
function getAuthHeader2() {
  if (Cookies.get('token') != null || Cookies.get('token') != undefined) {
    const token = Cookies.get('token');
    console.log(token)
    return {
      Authorization: ` Bearer ${token}`,
      'Accept': 'multipart/form-data',
      'Content-Type': 'multipart/form-data',
    };
  }
  return {
    'Accept': 'multipart/form-data',
    'Content-Type': 'multipart/form-data',
  };
}
/**
 * The FetchInterceptor class
 */

// http://192.168.1.103:8881

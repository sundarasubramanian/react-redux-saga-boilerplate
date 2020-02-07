import fetchDefaults from 'fetch-defaults';

// export const apiFetch = function(url, data) {
//   const serverUrl = "";

//   return fetchDefaults(window.fetch, serverUrl, {
//     headers: getAuthHeader(),
//   })(url, data);
// };
export const apiFetch = fetchDefaults(
  window.fetch,
  'http://dummy.restapiexample.com'
);
// function getAuthHeader() {
//   if (Cookies.get('token') != null || Cookies.get('token') != undefined) {
//     const token = Cookies.get('token');

//     return {
//       Authorization: ` Bearer ${token}`,
//       'Content-type': 'application/json',
//     };
//   }
//   return {
//     'Content-type': 'application/json',
//   };
// }

/**
 * The FetchInterceptor class
 */

// http://192.168.1.103:8881

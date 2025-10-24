/**
* Devuelve el status code
* 
* @param {String} url La URL de la cual queremos saber su Status Code
* @return {number} El status Code de la URL
* @customfunction
*/
function getStatusCode(url) {
  const requestHeaders = {
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
  };
  const response = UrlFetchApp.fetch(url, requestHeaders);
  return response.getResponseCode();
}
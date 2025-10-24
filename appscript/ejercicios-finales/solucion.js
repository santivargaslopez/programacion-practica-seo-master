function onOpen() {
  const ui = SpreadsheetApp.getUi();

  ui.createMenu('SEO')
    .addItem('Obtener Status Code', 'getRangeStatusCode')
    .addItem('Obtener Sugerencias', 'getRangeSuggestions')
    .addToUi();
}

function getRangeStatusCode() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const dataRange = sheet.getRange('A2:A');
  const data = dataRange.getValues();
  data.map((cell, index) => {
    const [value] = cell;
    if (value) {
      Logger.log(value)
      sheet.getRange(index + 2, 2).getCell(1, 1).setValue(getStatusCode(value))
    }
  })
}

/**
* Devuelve el status code
* 
* @param {String} url La URL de la cual queremos saber su Status Code
* @return {number} El status Code de la URL
* @customfunction
*/
function getStatusCode(url) {
  const options = {
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'muteHttpExceptions': true,
    'followRedirects': false
  };

  const response = UrlFetchApp.fetch(url, options);
  return response.getResponseCode();
}


function getRangeSuggestions() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const dataRange = sheet.getRange('A:A');
  const data = dataRange.getValues();
  data.map((cell, index) => {
    const [value] = cell;
    if (value) {
        sheet.getRange(index + 2,  2).getCell(1, 1).setValue(getSuggestions(value))
    }
  })
}

/**
* Sugiere Queries relacionadas
* 
* @param {String} keyword La keyword de la cual queremos saber sus sugerencias
* @return {Array} Array de elementos relacionados
* @customfunction
*/
function getSuggestions(keyword) {
  const xml = UrlFetchApp.fetch(`http://suggestqueries.google.com/complete/search?output=toolbar&q=${keyword}`).getContentText();
  const document = XmlService.parse(xml);
  const suggestions = document.getRootElement().getChildren('CompleteSuggestion');
  return suggestions.map(completeSuggestion => {
    return completeSuggestion
      .getChildren('suggestion')
      .map(suggestion => suggestion.getAttribute('data').getValue())
  }).join(',')
}
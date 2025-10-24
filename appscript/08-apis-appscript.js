function obtenerDatos() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const dataRange = sheet.getRange('A:A');
  const data = dataRange.getValues();
  data.map((cell, index) => {
    const [value] = cell;
    if (value) {
      sheet.getRange(index + 1, 2).getCell(1, 1).setValue(getKwVolume(value))
    }
  })
}

function getKwVolume(keyword) {
  const rawData = UrlFetchApp
    .fetch(`http://db2.keywordsur.fr/keyword_surfer_keywords?country=ES&keywords=%5B%22${keyword}%22%5D`)
    .getContentText();
  const dataParsed = JSON.parse(rawData)
  return dataParsed[keyword]['search_volume']
}
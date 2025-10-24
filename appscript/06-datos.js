function duplicar() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const dataRange = sheet.getRange('A:A');
  const data = dataRange.getValues();
  data.map((cell, index) => {
    const [value] = cell;
    if (value) {
      sheet.getRange(index + 1, 2).getCell(1, 1).setValue(value)
    }
  })
}
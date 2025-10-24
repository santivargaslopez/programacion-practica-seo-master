function onOpen() {
  const ui = SpreadsheetApp.getUi();
 
   ui.createMenu('Menú de ejemplo')
   .addItem('Primer elemento', 'aviso')
   .addSeparator()
   .addSubMenu(ui.createMenu('Sub-menú')
              .addItem('Primer elemento del sub-menú', 'aviso'))
   .addToUi();  
 }
 
 function aviso() {
   SpreadsheetApp.getUi().alert('Se ha pulsado un elemento del menú')
 }
 
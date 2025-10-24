// 1. Importamos todos los modulos necesarios
const scrape = require('seo-scraper');

// 2. Creamos los selectores, los headers y la función específica para extraer la información que queremos
const selectors = require('./config/selectors');
const parseSERP = require('./config/transformers');
const headers = require('./config/headers');


async function getPosition(query = 'seohacks', lang = 'es', domain = 'seohacks.es') {
  if(!query) {
    throw new Error('No query provided');
  }

  const queryRefined = query
    .trim()
    .replace(/[ ]{2,}/gi, ' ')
    .replace(' ', '+');

  const url = `https://www.google.com/search?q=${queryRefined}&hl=${lang}`;

  const options = {
    url,
    selectors,
    config: headers,
    transformer: parseSERP
  }
  
  const results = await scrape(options);
  return results.findIndex(site => site.url.includes(domain)) + 1;
}

getPosition()
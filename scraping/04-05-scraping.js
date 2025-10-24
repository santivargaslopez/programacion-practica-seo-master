const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


async function scrape(url) {
  // Request
  const response = await axios.get(url);

  // Parsing
  const dom = new JSDOM(response.data);

  // Output
  const title = dom.window.document.querySelector('title').text;

  console.log(title)

}

scrape('https://seohacks.es');

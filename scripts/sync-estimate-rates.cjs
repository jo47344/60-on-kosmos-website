const fs = require('node:fs');
const rates = require('../lib/stay-rates.json');
fs.writeFileSync('public/stay-estimate/rates.js', '(function(root){const rates='+JSON.stringify(rates)+';root.KosmosRates=rates;if(typeof module!=="undefined")module.exports=rates;})(typeof window!=="undefined"?window:globalThis);\n');

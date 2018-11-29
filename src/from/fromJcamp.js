'use strict';

const convert = require('jcampconverter').convert;

function fromJcamp(db, jcamp, options = {}) {
  const {
    name = 'jcamp'
  } = options;
  let result = convert(jcamp, { xy: true }).spectra[0];
  db[name] = result;

  console.log(result);
}

module.exports = fromJcamp;


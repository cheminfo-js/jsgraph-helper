'use strict';

const fs = require('fs');
const join = require('path').join;

const fromJcamp = require('../fromJcamp');


describe('jsgraph-helper', () => {
  it('fromJcamp', () => {
    let jcamp = fs.readFileSync(join(__dirname, 'data/ir.jdx'), 'utf8');
    let db = {};
    let result = fromJcamp(db, jcamp, {});
    console.log(result);
  });
});

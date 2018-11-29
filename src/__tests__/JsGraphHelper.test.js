'use strict';

const fs = require('fs');
const join = require('path').join;

const JsGraphHelper = require('..');


describe('jsgraph-helper global test', () => {
  it('load jcamp and get jsonChart', () => {
    let graphHelper = new JsGraphHelper();

    const jcamp = fs.readFileSync(join(__dirname, '../from/__tests__/data/ir.jdx'), 'utf8');
    graphHelper.fromJcamp(jcamp, { name: 'ir' });
  });
});

'use strict';

function JsGraphHelper() {
  this.db = {};
}


JsGraphHelper.prototype.fromJcamp = function (jcamp, options) {
  require('./from/fromJcamp')(this.db, jcamp, options);
};

JsGraphHelper.prototype.toJsonChart = function (options) {
  require('./to/toJsonChart')(this.db, options);
};

module.exports = JsGraphHelper;

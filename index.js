'use strict';

var isUncPath = require('is-unc-path');

module.exports = function isRelative(fp) {
  if (typeof fp !== 'string') {
    throw new TypeError('isRelative expects a string.');
  }
  return !isUncPath(fp) && !/^([a-z]:)?[\\\/]/i.test(fp);
};

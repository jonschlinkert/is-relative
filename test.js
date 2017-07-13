'use strict';

require('mocha');
var assert = require('assert');
var isRelative = require('./');

describe('isRelative', function() {
  it('should throw an error when the value is not a string.', function() {
    assert.throws(function() {
      isRelative();
    }, 'isRelative expects a string.');
  });

  it('should return true if the path appears to be relative', function() {
    assert.equal(isRelative('test/fixtures'), true);
    assert.equal(isRelative('test/fixtures/'), true);
    assert.equal(isRelative('test/fixtures/foo.txt'), true);
    assert.equal(isRelative('./test/fixtures/foo.txt'), true);
    assert.equal(isRelative('./test/fixtures/foo.txt'), true);
  });

  it('should return false if the path does not appear to be relative', function() {
    assert.equal(isRelative('/test/fixtures'), false);
    assert.equal(isRelative('/test/fixtures/'), false);
    assert.equal(isRelative('/test/fixtures/baz.md'), false);
    assert.equal(isRelative('e://test/fixtures/'), false);
    assert.equal(isRelative('e:/test/fixtures/'), false);
    assert.equal(isRelative('\\test\\fixtures\\'), false);
  });
});

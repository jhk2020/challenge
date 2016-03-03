var expect = require('chai').expect
var sinon = require('sinon');
var score = require('./refactored_solution.js');
var MockBrowser = require('mock-browser').mocks.MockBrowser;

describe('Score', function() {
  it('computes score for single frame', function() {
    var frame = [[1,2]];
    var actual = score(frame);
    expect(actual).to.equal(3);
  });
  it('computes score for multiple frames', function() {
    var frames = [[2, 4], [3, 4]];
    var actual = score(frames);
    expect(actual).to.equal(13);
  });
  it('computes score for a single strike including bonus', function() {
    var frames = [[10, 0], [1, 2]];
    var actual = score(frames);
    expect(actual).to.equal(16);
  });
  it('computes score for spares including bonus', function() {
    var frames = [[1, 9], [2, 4]];
    var actual = score(frames);
    expect(actual).to.equal(18);
  });
  it('computes score for two strikes in a row', function() {
    var frames = [[10, 0], [10, 0], [2, 4]];
    var actual = score(frames);
    expect(actual).to.equal(44);
  });
  it('computes score for perfect game', function() {
    var mock = new MockBrowser();
    var window = mock.getWindow();
    var prompt = sinon.stub(window, 'prompt');
    prompt.onCall(0).returns(10);
    prompt.onCall(1).returns(10);
    
    var frames = [[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0]];
    var actual = score(frames, prompt);
    expect(actual).to.equal(300);
  })
})

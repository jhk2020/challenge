var expect = require('chai').expect
var score = require('./solution.js');

describe('Score', function() {
  var tests = [
    {args: [[1, 2]], expected: 3},
    {args: [[2, 4], [3, 4]], expected: 13},
    {args: [[10, 0], [1, 2]], expected: 16},
    {args: [[1, 9], [2, 4]], expected: 18},
    {args: [[10, 0], [10, 0], [2, 4]], expected: 44}
  ]
  tests.forEach(function(test) {
    it('correctly computes the score for ' + test.args, function() {
      var actual = score(test.args)
      expect(actual).to.equal(test.expected);
    })
  })
})

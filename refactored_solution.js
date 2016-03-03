function isStrike(frame) {
    if (frame[0] === 10) {
        return true;
    }
    return false;
}

function strikeBonus(frameIndex, frame, nextFrame, nextNextFrame, bonusRound, eighthFrameIsStrike) {
  var bonus = 0;
  // if last frame, just add bonus rounds
  if (frameIndex === 9) {
    if (eighthFrameIsStrike) {
      bonus += (2 * bonusRound[0] + bonusRound[1]);
    } else {
      bonus += (bonusRound[0] + bonusRound[1]);
    }
    // if next frame is a strike, add next frame (10) plus first ball of the frame after
  } else if (isStrike(nextFrame)) {
    // unless it's 8th frame, where you want to add next frame (10) plus the first bonus ball
    // This is taken into account above using 'eighthFrameIsStrike'
    if (frameIndex === 8) {
      bonus += 10;
    } else {
      bonus += (10 + nextNextFrame[0]);
    }
    // else, add sum of next frame
  } else {
    bonus += (nextFrame[0] + nextFrame[1]);
  }
  return bonus;
}

function isSpare(frame) {
    if (frame[0] !== 10 && frame[0] + frame[1] === 10) {
        return true;
    }
    return false;
}

function spareBonus(frameIndex, nextFrame, bonusRound) {
  var bonus = 0;
  if (frameIndex === 9) {
    bonus += bonusRound[0];
  }
  bonus += nextFrame[0];
  return bonus;
}

module.exports = function score(game, prompt) {
  var finalScore = 0;
  var bonusRound = [];
  var eighthFrameIsStrike = false;
  for (var i = 0; i < game.length; i++) {
    var frame = game[i];
    var frameSum = 0;
    if (isStrike(frame)) {
      if (i === 8) {
        eighthFrameIsStrike = true;
      }
      if (i === 9) {
        var score1 = prompt('Enter score for first bonus ball:');
        bonusRound.push(Number(score1));
        var score2 = prompt('Enter score for second bonus ball:');
        bonusRound.push(Number(score2));
      }
      frameSum += strikeBonus(i, frame, game[i + 1], game[i + 2], bonusRound, eighthFrameIsStrike);
    }
    if (isSpare(frame)) {
      if (i === 9) {
        var score = prompt('Enter score for bonus ball:');
        bonusRound.push(Number(score));
      }
      frameSum += spareBonus(i, game[i + 1], bonusRound);
    }
    frameSum += frame[0] + frame[1];
    finalScore += frameSum;
  }
  return finalScore;
}

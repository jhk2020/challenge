function score(game) {
    var strikeTracker = [];
    var spareTracker = [];

    function isStrike(curr) {
        if (curr[0] === 10) {
            return true;
        }
        return false;
    }

    function strikeBonus(curr) {
        var bonus = 0;
        if (strikeTracker.length === 1) {
            if (!isStrike(curr)) {
                strikeTracker.shift();
            }
            bonus += curr[0] + curr[1];
        } else if (strikeTracker.length === 2) {
            bonus += 2 * curr[0] + curr[1];
            strikeTracker.shift();
            if (!isStrike(curr)) {
                strikeTracker.shift();
            }
        }
        return bonus;
    }

    function isSpare(curr) {
        if (curr[0] !== 10 && curr[0] + curr[1] === 10) {
            return true;
        }
        return false;
    }

    function spareBonus(curr) {
        var bonus = 0;
        if (spareTracker.length === 1) {
            bonus += curr[0];
            spareTracker.shift();
        }
        return bonus;
    }

    function accum(prev, curr, currentIndex) {
        var frameSum = 0;
        frameSum += strikeBonus(curr);
        frameSum += spareBonus(curr);
        frameSum += curr[0] + curr[1];

        if (isStrike(curr, currentIndex)) {
            strikeTracker.push(currentIndex);
            if (currentIndex === 9) {
                var bonus1 = prompt('Enter score for first strike bonus:');
                if (strikeTracker.length === 2) {
                    frameSum += Number(bonus1);
                }
                frameSum += Number(bonus1);
                var bonus2 = prompt('Enter score for second strike bonus:');
                frameSum += Number(bonus2);
            }
        }
        if (isSpare(curr, currentIndex)) {
            spareTracker.push(currentIndex);
            if (currentIndex === 9) {
                var bonus = prompt('Enter score for spare bonus:');
                frameSum += Number(bonus);
            }
        }
        return frameSum + prev;
    }

    return game.reduce(accum, 0);
}

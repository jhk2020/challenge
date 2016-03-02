# SellerCrowd Programming Challenge
We'd love to get to know you and your code a bit better.  Our goal is to give you a problem that lets you showcase your skills without taking up too much of your time.

## Guidelines
- Don't spend more than an hour on this.  Tackling every edge case isn't critical.
- Read the problem carefully - don't do too much.
- Programming practices that are important to us:
    - Tests!
    - Clean, readable code
    - Simplicity
- Use whatever language / tools you like (we use javascript / tape and python / pytest).

## The Problem
We're going to write some code that scores a game of bowling - [read more about play and scoring here](https://en.wikipedia.org/wiki/Ten-pin_bowling#Play).

A game of bowling is made up of frames.  We'll model a game as an array of frame arrays that contain the number of pins knocked down on each roll.
```js
var game = [[2, 3], [3, 4], [7, 2]];
```

Your job is to write a function that accepts a (not necessarily complete) game and returns the score.
```js
var game = [[2, 3], [3, 4], [7, 2]];

score(game); // returns 21
```

Don't forget about strikes, spares, and the final frame - they make scoring a bit more complicated!

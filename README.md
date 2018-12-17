# Crystal Collector

### Overview

This simple game was built using Javascript and JQuery, and Bootstrap for some of the underlying layout blocking.

- - -

### Objectives

The goal of this project was to randomly generate a number between 19 and 120 and insert it to the approprate place within the HTML using JQuery as the player's Target Number.

Then, for every game, have random numbers between 1 and 12 assigned to the four crystal images so that when a user clicks on one of them it assigns that crystal's value to users current total score.

The objective is for the user to click on a number of crystals so that their total score equals the target random number.

If they are able to match this number exactly they win and the game resets. If however their current total score ever exceeds the target number they loose, and the game resets but keeps the current score.

![crystal-game](https://gamlilorien.github.io/crystal-game/assets/images/crystal-game.png)

1. [Watch the demo](https://youtu.be/yNI0l2FMeCk).

2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

3. Here's how the app works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, a new random number will become visible. Also, all the crystals will have four new hidden values. Only when starting a new game will the user's score (and the score counter) reset to zero.

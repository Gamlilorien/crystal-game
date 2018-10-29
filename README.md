# crystal-game

### Overview

This simple game was built using Javascript and JQuery, and Bootstrap for some of the underlying layout blocking.

### Objectives

The goal of this project was to randomly generate a number between 19 and 120 and insert it to the approprate place within the HTML using JQuery as the player's Target Number.

Then, for every game, have random numbers between 1 and 12 assigned to the four crystal images so that when a user clicks on one of them it assigns that crystal's value to users current total score.

The objective is for the user to click on a number of crystals so that their total score equals the target random number.

If they are able to match this number exactly they win and the game resets. If however their current total score ever exceeds the target number they loose, and the game resets but keeps the current score.

![Crystal Collector](assets/images/Crystal-game.png)

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

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
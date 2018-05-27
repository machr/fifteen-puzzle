# Fifteen Puzzle

### Objective
Create a tile puzzle interface that consists of a frame divided into even tiles with one tile missing. These tiles should then be randomised so that user interaction is required to resolve the original frame. Tiles may only be moved into the empty position.


### Link to the state of the app after 4 hours
[Fifteen Puzzle on Github Pages](https://machr.github.io/fifteen-puzzle/)

### Technology used
* ES6
* Vue + vue-cli to generate the project
* SCSS 
* Webpack to import modules and single file components and bundle project


### Approach
I spent some time researching how to approach the project. This is the more complex project I have worked on in Vue by myself and I spent too much time setting up components and figuring out how to pass data between them. 

I chose to go with 2 components within the App; A parent 'Board' component, which contains 9 children 'Tile' components rendering from a hardcoded array of tile objects. 

I kept the `SCSS`styling scoped in the `Tile` component. The styling itself is centered around the look rather than layout. 

In the `Board` component, there are rules for layout and positioning. There is some duplication that could be refactored but that was not a priority given the time constraint.


### Challenges
A mentioned earlier, this project is the most complex Vue code I have had to write myself. My previous experience with Vue has been mostly editing existing code or writing small additions.

Creating functions and accessing the correct data took me longer to figure out than I expected and I ran out of time before finishing the game logic.

I will come back to this project again after it's been reviewed and finish it.


### Todo

* Create a function that randomises the order of the tiles.

* Create game logic that compares blank tile coordinates with clicked tile to determine if the chosen tile can be moved within the rules of the game.

* Check if the order of elements on the board match the winning combination of 1 through 9 in order.

* Deploy to static site hosting on github.io/machr for presentation


##### Nice to haves
* Animated transitions
* Announcement when a winning combination is reached.
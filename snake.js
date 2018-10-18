//CONSTANANTS 
var COLS = 26,
  ROWS = 26;
var EMPTY = 0,
  SNAKE = 1,
  FRUIT = 2;
//GRID
var grid = {
  width: null,
  height: null,
  _grid: null,
//GRID SYSTEM/LAYOUT
  init: function (d, c, r) {
    this.width = c;
    this.height = r;

    this._grid = [];
    for (var x = 0; x < c; x++) {
      this._grid.push([]);
      for (var y = 0; y < r; y++) {
        this._grid.push(d);
      }
    }
  },

  set: function (val, x, y) {
    this._grid[x] [y] = val;
  },

  get: function (x, y) {
    return this._grid[x] [y];
  }
}
//SNAKE FUNCTIONS AND LAYOUTS
var snake = {
  direction: null,
  last: null,
  _queue: null,

  init: function (d, x,y) {
    this.direction = d;
    
    this._queue = [];
    this.insert(x, y);
  },

  insert: function (x, y) {

  },

  remove: function () {

  }
}
//TBD :)
function setFood() {

}
function main() {

}
function init() {

}
function update() {

}
function draw() {

}

main();
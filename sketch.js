let grid = []
let size = 50;
let numRows = 7;
let numCols = 7;
let initialSet = []//initial alive cells
let aliveCol = 40
let deadCol = 200;
function setup() {
  createCanvas(600, 600);
  for(let i = 0; i<numRows; i++){
    for(let j = 0; j<numCols; j++){
      grid.push(new Cell(j*size,i*size,size,deadCol,false))
    }

  }
}

function draw() {
  background(220);
  
  for(let i = 0; i<grid.length; i++){
    grid[i].display()
  }
}

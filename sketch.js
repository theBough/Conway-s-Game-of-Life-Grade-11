let grid = []
let size = 50;
let numRows = 7;
let numCols = 7;
let aliveSet = [11,12,13]//alive cells
let aliveCol = 40
let deadCol = 200;
function setup() {
  createCanvas(600, 600);
  for(let i = 0; i<numRows; i++){
    for(let j = 0; j<numCols; j++){
      grid.push(new Cell(j*size,i*size,size,deadCol,false))
    }
  }

  setIteration()
}

function draw() {
  background(220);
  
  for(let i = 0; i<grid.length; i++){
    grid[i].display()
  }
}

function setIteration(){
  for(let i = 0; i<aliveSet.length; i++){
    liveCell = aliveSet[i]; //getting the index for an alive cell
    grid[liveCell].alive = true;
    grid[liveCell].myColour = aliveCol;
  }
}

function clearAliveSet(){
  while(aliveSet.length > 0){
    aliveSet.pop();
  }
}

function newIteration(){
  for(let i=0; i<grid.length; i++){
    let liveNeighbours = checkAliveNeighbours(i)
    
    
  }

}

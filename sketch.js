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

function keyReleased(){
  if(key == 'n'){
    clearAliveSet()
    newIteration()
    clearGrid();
    setIteration()
  }
}

function clearGrid(){
  for(let i = 0; i<grid.length; i++){
    grid[i].alive = false;
    grid[i].myColour = deadCol;
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

//Rule 1: If a cell is alive, it needs 2-3 neighbours to stay alive
//Rule 2: If a cell has 4 or more alive neighbours, it will die
//Rule 3: If a cell is dead, but has 3 alive neighbours, it will be alive
//Rule 4: If a cell has 1 or 0 alive neighbours it will die.
function newIteration(){
  for(let i=0; i<grid.length; i++){
    let liveNeighbours = checkAliveNeighbours(i)
    if(liveNeighbours == 2 && grid[i].alive){
      aliveSet.push(i)
    }
    
    if(liveNeighbours == 3){
      aliveSet.push(i)
    }

  }

}

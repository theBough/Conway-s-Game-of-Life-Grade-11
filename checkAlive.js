function numAliveNeighbours(){
  //number of alive neighbours
  let isAlive = 0;
  
  //check left neighbour
  if(cellNum % numCols > 0){ //check if cell is on the left side of grid
    if(grid[cellNum - 1].alive){//check if left neighbour is alive
      isAlive++;
    }
  }
  
  //check right neighbour
  if(cellNum % numCols < numCols - 1){//check if cell is on the right side of grid
    if(grid[cellNum + 1].alive){//check if right neighbour is alive
      isAlive++;
    }
  }
  
  //check top neighbour
  if(cellNum >= numCols){//check if cell is on the top of the grid
    if(grid[cellNum - numCols].alive){//check if top neighbour is alive
      isAlive++;
    }
  }
  
  //check bottom neighbour
  if(cellNum < (numRows - 1) * numCols){//check if cell is on the bottom of the grid
    if(grid[cellNum - numCols].alive){//check if bottom neighbour is alive
      isAlive++;
    }
  }
  
}

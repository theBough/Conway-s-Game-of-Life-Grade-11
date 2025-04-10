function Cell(x,y,size,myColour,alive){
  this.x = x
  this.y = y
  this.size = size
  this.myColour = myColour
  this.alive = alive;
  
  this.display = function(){
    fill(this.myColour)
    rect(this.x,this.y,this.size,this.size)
  }
}

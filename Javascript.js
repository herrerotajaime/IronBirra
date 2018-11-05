window.onload = function(){
document.getElementById("button").onclick= function(){
  var canvas= new Canvas();
  canvas.Startgame()
}
}
function Canvas(id){
  this.canvas= document.getElementById("myCanvas");
  this.ctx= this.canvas.getContext("2d");
  this.background= new Background(this.canvas);
  this.homer= new Homer(this.canvas)
}

Canvas.prototype.Startgame=function(){
  this.background.draw()
  this.homer.draw()
}

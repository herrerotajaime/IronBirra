const KEY_LEFT = 37;
const KEY_RIGHT = 39;

function Homer(canvas){
  this.canvas=canvas;
  this.ctx= this.canvas.getContext("2d");
  this.img= new Image();
  this.img.src ="Sprites/Homer.png"
  this.width= 100
  this.height= 220
  this.x= 500
  this.y=400
  this.speedx=15
}
Homer.prototype.draw= function(){
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);}

  Homer.prototype.setListeners = function () {
    document.onkeydown = function (e) {
      e.preventDefault();
      var KEY_RIGHT = 39;
      var KEY_LEFT = 37;
      switch (e.keyCode) {
        case KEY_LEFT:
          (this.homer.this.x-=this.speedx)
          break;}
    }
  }



        
      
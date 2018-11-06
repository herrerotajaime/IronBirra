function Duff(canvas){
  this.canvas=canas;
  this.ctx=this.canvas.getContext("2d");
  this.img= new Image();
  this.img.src="Cervezas/Duff.png"
  this.width=10
  this.height=10
  this.y= -10
}

Duff.prototype.draw= function(){
  this.ctx.drawImage(this.img, this.y, this.width, this.height);
}
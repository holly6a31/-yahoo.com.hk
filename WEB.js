function Snake(){
   this.x = 0;
   this.y = 0;
   this.xSpeed = scale * 1;
   this.ySpeed = 0;

   this.draw = function(){
      ctx.fillStyle = "lightgreen";
      ctx.fillRect(this.x, this.y, 80, 80);
      ctx.strokestyle = "darkgreen";
      ctx.strokeRect(this.x, this.y, 80, 80);
    
    }

    this.update = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width){
     this.x = 0;
    }
   
    if(this.y > canvas.height){
      this.y = 0;
    }

    if(this.x < 0){
        this.x = canvas.width;
    }

    if(this.y < 0){
        this.y = canvas.width;
    }

 }

 this.changeDirection = function(direction){
   switch(direction){
     case "Up":
    this.xSpeed = 0;
    this.ySpeed = -scale * 1;
    break;
    case "Down":
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
    case "Left":
        this.xSpeed =  -scale * 1;
        this.ySpeed = 0;
        break;
    case "Right":
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
   }
 }
}
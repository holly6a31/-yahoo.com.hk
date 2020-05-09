const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

 function fruit(){
  fruit.x ;
  fruit.y;   
   
  fruit_image.pickLocation = function(){
    fruit.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    fruit.y = (Math.floor(Math.random() * columns -1) +1) * scale;
   }
  
   var fruit_image;
  
   fruit_image.draw = function(){
    fruit_image = new Image();
    fruit_image.src = "bear.jpg";
   }
  }

    let score = 0;

    var snake;
  (function setup() {
 snake = new Snake();
 fruit = new fruit();
 fruit_image.pickLocation; 

 window.setInterval(() => {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   fruit_image.draw();
   snake.update();
   snake.draw()
   ctx.drawImage (fruit_image, fruit.x, fruit.y, 30, 30);
   ctx.font = "45px Changa one";
   ctx.fillText(score,2*scale,4*scale);
   
   if (snake.eat(fruit)){
    fruit_image.pickLocation;  
   } 
}, 250);
}());

window.addEventListener("keydown", ((evt) => {
    const direction = evt.key.replace("Arrow", "");
    snake.changeDirection(direction);


}))

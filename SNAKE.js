const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;


var fruit_image;
  fruit_image = new Image();
  fruit_image.src = "bear.jpg";
  fruit_image.onload = function(){
      ctx.drawImage (this, 0, 0, 30, 30,);
  } 

var snake;
(function setup() {
 snake = new Snake();


 window.setInterval(() => {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   snake.update();
   snake.draw(); 
}, 250);
}());

window.addEventListener("keydown", ((evt) => {
    const direction = evt.key.replace("Arrow", "");
    snake.changeDirection(direction);


}))

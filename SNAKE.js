const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;


var fruit_image;
  fruit_image = new Image();
  fruit_image.src = "bear.jpg";
  
  var snake;
  (function setup() {
   snake = new Snake();

 let fruit = {
  x : Math.floor(Math.random()*17+1) * scale,
  y : Math.floor(Math.random()*15+3) * scale
  }

  let score = 0;

  
 window.setInterval(() => {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   snake.update();
   snake.draw();
   ctx.drawImage (fruit_image, fruit.x, fruit.y, 30, 30);
  ctx.font = "45px Changa one";
  ctx.fillText(score,2*scale,4*scale);
}, 250);
}());

window.addEventListener("keydown", ((evt) => {
    const direction = evt.key.replace("Arrow", "");
    snake.changeDirection(direction);


}))

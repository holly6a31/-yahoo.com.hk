const GAME_FPS = 1000/60;
const SCREEN_SIZE_W = 256;
const SCREEN_SIZE_H = 224;

//back screen

let can = document.getElementById("can");
let cavas = can.getContext("2d");

let bcan = document.createElement("canvas");
let bcavas = bcan.getContext("2d");

can.width = SCREEN_SIZE_W;
can.height = SCREEN_SIZE_H;

bcan.width = SCREEN_SIZE_W*2;
bcan.height = SCREEN_SIZE_H*2;

let frameCount = 0;
let startTime;


let charImg = new Image();
charImg.src = "sprite.png";
charImg.onload = draw;

function update(){}

//backscreen
function draw(){
bcavas.fillStyle="lightblue";
bcavas.fillRect(0, 0, SCREEN_SIZE_W, SCREEN_SIZE_H);
bcavas.drawImage(charImg, 0, 0, 16, 32, 0, 0, 16, 32);

bcavas.font= "24px 'Impact'";
bcavas.fillStyle ="white";
bcavas.fillText("FRAME:"+frameCount, 10, 20);
bcavas.drawImage(bcan, 0, 0, SCREEN_SIZE_W, SCREEN_SIZE_H, 0, 0, SCREEN_SIZE_W*2, SCREEN_SIZE_H*2);
}

//setInterval(mainLoop, 1000/60);

window.onload = function(){
    startTime = performance.now();
    mainLoop();
}

function mainLoop(){    
    let nowTime = performance.now();
    let nowFrame = (nowTime-startTime) / GAME_FPS;
   
    if( nowFrame > frameCount ){
     let c=0;
     while ( nowFrame > frameCount ){
        frameCount++;
        update();
        if( ++c >= 4 )break;
     }
    draw();
    }
    requestAnimationFrame(mainLoop);

}

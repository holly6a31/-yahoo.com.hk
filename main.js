const FONT = "48px monospace";
const HEIGHT = 120;
const WIDTH = 128;
const SMOOTH = 0;
const TILESIZE = 15;
const TILECOLUMN = 4;
const TILEROW = 4;


let gScreen;
let gFrame = 0;
let gHeight;
let gWidth;
let gImgMap;

function DrawMain(){
    
    const g = gScreen.getContext("2d"); 

    for (let y=0; y<32; y++){
        for(let x = 0; x< 64; x++){
            DrawTile( g, x *TILESIZE , y *TILESIZE, 30)

            
        }
    }
        g.font = FONT;
        g.fillText("Hello Word" + gFrame, gFrame / 10, 64);  
}

function DrawTile( g, x, y, idx){
    const ix = (idx % TILECOLUMN) * TILESIZE;
    const iy = Math.floor(idx / TILECOLUMN) * TILESIZE;
    g.drawImage( gImgMap, ix, iy,  TILESIZE, TILESIZE, x, y, TILESIZE, TILESIZE );

}




function WmPaint(){
    DrawMain();
    const ca = document.getElementById("main");
    const g = ca.getContext("2d");

    g.drawImage (gScreen, 0, 0, gScreen.width, gScreen.height, 0, 0, gWidth, gHeight );
}
function WmSize(){
    const ca = document.getElementById("main");
    ca.width = window.innerWidth;
    ca.height = window.innerHeight;

    const g = ca.getContext("2d");
    g.imageSmoothingEnabled = g.msImageSmoothEnabled = SMOOTH;
    
    gWidth = ca.width; 
    gHeight= ca.height;

    if(gWidth / WIDTH < gHeight / HEIGHT){
        gHeight = gWidth * HEIGHT / WIDTH;
    }else{
        gWidth = gHeight * WIDTH / HEIGHT;
    }
}



function WmTimer(){
    gFrame++;
    WmPaint();

    
}  

window.onload = function(){
    gImgMap = new Image(); gImgMap.src="mari.png";
   
    gScreen = document.createElement("canvas");
    gScreen.width = WIDTH;
    gScreen.height = HEIGHT; 
   
    WmSize();
    window.addEventListener("resize", function() {WmSize() });
    setInterval( function(){WmTimer() }, 33);
}
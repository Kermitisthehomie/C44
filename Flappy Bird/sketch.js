var backgroundImage 

function preload(){
backgroundImage=loadImage("Background1.png")

}


function setup() {
  createCanvas(windowWidth,windowHeight );

}

function draw() {
  background(backgroundImage);
}
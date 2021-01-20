var catimg1,cat_running,catimg3;
var mouseimg1,mouseimg2,mouseimg3;
var cat,mouse;
var backimg;



function preload() {
    //load the images here
 catimg1 = loadImage ("images/tomOne.png");
 cat_running = loadAnimation("images/tomTwo.png","images/tomThree.png");
 catimg3 = loadImage("images/tomFour.png");

 backimg = loadImage("images/garden.png");

 mouseimg1 = loadImage ("images/jerryOne.png");
 mouseimg2 = loadAnimation("images/JerryTwo.png","images/jerryThree.png");
 mouseimg3 = loadImage("images/JerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,700,50,50);
    cat.addImage(catimg1);
    cat.scale = 0.1;

    mouse = createSprite(200,700,50,50);
    mouse.addImage(mouseimg1)
    mouse.scale = 0.1;





}

function draw() {

    background(backimg);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x <(cat.width - mouse.width)/2) {
         cat.velocityX = 0;
         cat.addImage("cat2",catimg3);
         cat.changeImage("cat2");
         cat.x = cat.x + 60;

         mouse.addImage("mouse1",mouseimg3);
         mouse.changeImage("mouse1");
     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown("LEFT_ARROW")) {
   cat.velocityX = -5;
   cat.addAnimation("catimg2",cat_running);
   cat.changeAnimation("catimg2");

  }

  if (keyDown("LEFT_ARROW")) {
    mouse.addAnimation("mouse_running",mouseimg2);
    mouse.changeAnimation("mouse_running");
 
   }

}

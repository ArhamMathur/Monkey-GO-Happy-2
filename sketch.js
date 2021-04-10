//giving all the caracters a variable
var backImage, player_running, bananaImage, obstical_img, score = 0 , invisible_ground; 


//giving variable obstical and banana group
var obsticalGroup;
var bananaGroup;

//setting function preload to load image or animation
function preload()
{
  //loading image for jungle
  backImage = loadImage("jungle.jpg");
  
  //loading all monkey images for player
  player_running =     loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  //loading image for banana
  bananaImage = loadImage("banana.png");
  
  //loading image for rock
  obstical_img = loadImage("stone.png");
}


//setting setup function to set some special things
function setup() 
{
  //creating the canvas
  createCanvas(500, 400);
  
  
  //creating, adding velocity and adding the animation to  the background
  back = createSprite(100,100,700,400);
  back.velocityX = -9;
  back.addImage ("junjle",backImage);
  back.x = back.width/2;
  
  //creating invisible_ground, and making it invisible
  invisible = createSprite(35,381,400,10);
  invisible.visible = false;
  
  //creating, adding the animation to the player, making it collide with   invisible_ground
  player = createSprite(80,380,5,5);
  player.addAnimation("monkey",player_running);
  player.scale = 0.09;
  
  obsticalGroup = new Group();
  bananaGroup = new Group();
  
}

//setting function draw
function draw() {
  background(220);
   
  //adding function to repete the junjel
  if (back.x < 0)
  {
    back.x = back.width/2;
  }
  
   if(frameCount % 80 === 0) 
    {
      obstical = createSprite(800,345,2,2); 
      obstical.velocityX = -9;      
      obstical.addImage("stone.png",obstical_img);
      obstical.scale = 0.17;
      obsticalGroup.add(obstical)
      obsticalGroup.visible = true;      
    }
  
      if(frameCount % 110 === 0) 
    {
      //creating, adding velocity and animation to the banana
      banana = createSprite(670,230,20,10);
      banana.velocityX = -9;
      banana.addImage ("banana",bananaImage);
      banana.scale = 0.04;                  
      bananaGroup.add(banana);
      bananaGroup.visible = true; 
      bananaGroup.lifetime = 100;
    }
   
  
  if(player.isTouching(bananaGroup))
    {
      score = score+2;
      bananaGroup.destroyEach();
      
      switch(score)
       {
         case 10 : player.scale = 0.12;
           break;
         case 20 : player.scale = 0.14;
           break;
         case 30 : player.scale = 0.16;
           break
         case 40 : player.scale = 0.18;
           break;
         case 60 : player.scale = 0.19;
           break;
         case 80 : player.scale = 0.20;
           break;
         case 100 : player.scale = 0.21;
           break;
          case 140 : player.scale = 0.22;
           break;
          case 180 : player.scale = 0.23;
           break;
          case 280 : player.scale = 0.24;
           break; 
         default : break;  
       } 
    }
  
  if(player.isTouching(obsticalGroup))
    {
      player.scale = 0.09;
      score = 0
    }
  
  //setting function to suport player
  player.collide(invisible)
  
  //adding jumping ability to player
  if(keyWentDown(UP_ARROW))
    {
      player.velocityY = -11;
    }
  
  //add gravity
  player.velocityY = player.velocityY + 0.6;
  
  
  //setting function drawSprites
  drawSprites()
  text("score"+score,430,30 );
}

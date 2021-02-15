const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;

var wall ;
  var bullet;
  var speed;
  var weight;
  var thickness;

function setup() {
  createCanvas(1600,400);

  myEngine=Engine.create();
  myWorld=myEngine.world;

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

 

  myWorld=myEngine.world;

  bullet=createSprite(50,200,80,30);
  wall=createSprite(1200,200,thickness,height/2);
   wall.shapeColor=color(80,80,80);
   bullet.shapeColor=color(255,255,255);
}

function draw() {
  background(0);  
  bullet.velocityX=speed;
 if(hasCollided(bullet,wall)) {
   bullet.velocityX=0;

   var damage = 0.5 * weight * speed * speed / (thickness *thickness*thickness);

   if(damage < 10) {
    bullet.shapeColor=color(0,255,0);
   }
   if(damage > 10) {
    bullet.shapeColor=color(255,0,0);
  }
  console.log(damage);
 }
  
  Engine.update(myEngine);
  drawSprites();
}
function hasCollided(lBullet,lwall) {
bulletRightEdge = lBullet.x + lBullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge >= wallLeftEdge) {
  return true ;
} else{
  return false;
}
}
var bullet,wall,speed,weight,damage,thickness
function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  bullet=createSprite(50,200,20,20);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX=speed;
  thickness=Math.round(random(22,83));
}

function draw() {
  background("white");
  drawSprites();
  if(wall.x-bullet.x<=wall.width/2+bullet.width/2){
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
      bullet.velocityX=0;
    }
    else if(damage<=10){
      wall.shapeColor="green";
      bullet.velocityX=0;
    }
  }
}
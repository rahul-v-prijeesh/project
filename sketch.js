var img,d,road,dora,doragroup,o,ogroup,plane,crow,bdora,doracake,back,rm,bgroup,sound;
var score=0;
var r =2;
var game="play"
function preload(){
inhmg=loadImage("de.png");
  plane=loadImage("plane.png");
  doracake=loadImage("doracake.png");
  crow=loadImage("crowb.png");
  back=loadImage("background.png");
  sound=loadSound("song.mp3")
}

function setup() {
  rm =createSprite(200,200,400,400)
  road=createSprite(200,400,20,1);
  d=createSprite(50,200);
  d.addImage(inhmg);
  d.scale=0.2;
 road.shapeColor="grey";
  ogroup=createGroup()
  doragroup=createGroup();
  rm.addImage(back);
  rm.scale=4;
  road.visible=false;
  bgroup=createGroup();
  sound.loop();
}

function draw() {
 background("blue");
    imageMode(CORNER);
  image(back, 0, 0);
imageMode(CORNER);
  image(back, 0, 0, width, height);
  imageMode(CORNER);
  image(back, 0, 0, width, back.height*width/back.width); 
  var scale = 0.8;
  imageMode(CENTER);
  image(back, 0.5*width, 0.5*height, scale*width, scale*back.height*width/back.width);
 // dwbvexnsm,
  rm.velocityX=-3;
  if(rm.x<0)
  {
    rm.x=200;
  }
  if(mousePressedOver(d)||mousePressedOver(rm))
  {
    d.y=mouseY
  }
  if(game==="play"){
     if(keyDown("space")||keyDown("UP_ARROW"))
    {
    d.y=d.y-10;
    }
      if(keyDown("DOWN_ARROW"))
    {
    d.y=d.y+5;
    }
d.velocityY=0.8;
  d.collide(road)
 if(doragroup.isTouching(d))
   {doragroup.destroyEach();
   score=score+2;
      if(d.scale<0.3)
          {
            d.scale=d.scale+0.001;
          }
   }
  if(ogroup.isTouching(d)||d.y<0||d.y>400)
    {
      game="over"
      
    }
    if(bgroup.isTouching(d))
      {
        bgroup.destroyEach();
        score=score+3;
        if(d.scale<0.3)
          {
            d.scale=d.scale+0.005;
          }
      }
  cake();
  os();
  
  }
  if(game==="over")
    {
  sound.stop();
  d.velocityY=0;
  ogroup.setLifetimeEach(-1)
   doragroup.setLifetimeEach(-1)
  ogroup.setVelocityXEach(0)
  doragroup.setVelocityXEach(0)
      bgroup.setLifetimeEach(-1)
  bgroup.setVelocityXEach(0)  
  rm.velocityX=0;
      if(keyDown("space"))
   {
        score=0;
 d.y=200;
  game="play"
  ogroup.destroyEach()
   doragroup.destroyEach()
     bgroup.destroyEach();
     d.scale=0.2;
     sound.loop();
   }
  
}
  drawSprites();
  text("score: "+score,300,50);
  
  if(game==="over")
  {textSize(30)
  text("game over",200,200)}
}

function cake()
{
  if(frameCount%120===0)
 { m=random(100,300);
   dora=createSprite(400,m+40,20,20);
  
   dora.velocityX=-3;
   dora.lifetime=220;
   doragroup.add(dora);
   dora.addImage(doracake);
  dora.scale=0.05;
 rd=Math.round(random(1,5))
  
  if(rd===3)
    {
      bdora=createSprite(400,m+40,20,20);
      bdora.addImage(doracake); 
      bdora.scale=0.07;
      bgroup.add(bdora);
       bdora.velocityX=-3;
      bdora.lifetime=220;
    }
  
}}
  
function os ()
{
  if(frameCount%100===0)
 { 
   o=createSprite(400,random(100,300),30,40);
   o.velocityX=-3;
   o.lifetime=220;
   ogroup.add(o);
  rs=Math.round(random(1,2))
   if(rs===1)
   {o.addImage(plane);
   o.scale=0.05
  o.setCollider("rectangle",0,0,1400,800) 
   }
     if(rs===2)
   {o.addImage(crow);
   o.scale=0.08
    o.setCollider("circle",0,0,400) 
   }
  // o.debug=true
  //d.depth=o.depth+1
   
   //d.debug=true

   d.setCollider("circle",0,0,200)
 }
}


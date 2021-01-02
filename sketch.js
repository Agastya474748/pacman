var pacman_img,green_img,blue_img,lightgreen_img,red_img
var pacman,greenGhost,blueGhost,lightgreenGhost,redGhost
var edges
var wallarray1=[]
var wallarray2=[]
var wallarray3=[]
var wallarray4=[]
var wallarray5=[]
var wallarray6=[]
var dotarray1=[]
var ghost_group
var lives = 2
var dot1,dot2,dot3



function preload (){
  pacman_img=loadImage("images/pacman.png")
  green_img=loadImage("images/greenghost.png")
  blue_img=loadImage("images/blueghost.png")
  red_img=loadImage("images/redghost.jpg")
  lightgreen_img=loadImage("images/lightgreen.png")
}
function setup() {
  createCanvas(1400,700)
  ghost_group = new Group()
  
  edges = createEdgeSprites()

  pacman=createSprite(355,165)
  pacman.scale=0.15
  pacman.addImage(pacman_img)

  greenGhost=createSprite(700,350)
  ghost_group.add(greenGhost)
  greenGhost.scale=0.1
  greenGhost.addImage(green_img)

  blueGhost=createSprite(700,300)
  ghost_group.add(blueGhost)
  blueGhost.scale=0.08
  blueGhost.addImage(blue_img)

  redGhost=createSprite(750,240)
  ghost_group.add(redGhost)
  redGhost.scale=0.03
  redGhost.addImage(red_img)

  lightgreenGhost=createSprite(650,240)
  ghost_group.add(lightgreenGhost)
  lightgreenGhost.scale=0.06
  lightgreenGhost.addImage(lightgreen_img)

  dot1 = createSprite(190,235,5,5)
  dot2 = createSprite(200,575,5,5)
  dot3 = createSprite(1000,575,5,5)
  dot4 = createSprite(1000,150,5,5)
  dot5 = createSprite(190,160,5,5)

  redGhost.velocityX=5
  for( var x=50;x<width-50;x=x+100){
    wallarray1.push(createSprite(x,100,10,70))
   }
   for( var x=100;x<width-50;x=x+200){
    wallarray2.push(createSprite(x,200,70,10))
   }
   for( var x=50;x<width-50;x=x+100){
    wallarray3.push(createSprite(x,300,10,70))
   }
   for( var x=100;x<width-50;x=x+200){
    wallarray4.push(createSprite(x,400,70,10))
   }
   for( var x=50;x<width-50;x=x+100){
    wallarray5.push(createSprite(x,500,10,70))
   }
   for( var x=100;x<width-50;x=x+200){
    wallarray6.push(createSprite(x,600,70,10))
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,100,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,165,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,235,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,300,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,365,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,435,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,500,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,565,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,635,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
}

function draw() {
  background(0);
  fill("white")
  textSize(20)
  text("Lives:"+lives,50,50)

  if(keyWentDown(UP_ARROW)){
    pacman.velocityY=-3
    pacman.velocityX=0
  }
  if(keyWentDown(DOWN_ARROW)){
    pacman.velocityY=3
    pacman.velocityX=0
  }
  if(keyWentDown(RIGHT_ARROW)){
    pacman.velocityX=3
    pacman.velocityY=0
  }
  if(keyWentDown(LEFT_ARROW)){
    pacman.velocityX=-3
    pacman.velocityY=0
  }
  for(var i=0;i<7;i++){
    if(pacman.isTouching(wallarray2[i])){
      pacman.collide(wallarray2[i])
    }
  }
  for(var i=0;i<7;i++){
    if(pacman.isTouching(wallarray4[i])){
      pacman.collide(wallarray4[i])
    }
  }
  for(var i=0;i<7;i++){
    if(pacman.isTouching(wallarray6[i])){
      pacman.collide(wallarray6[i])
    }
  }
  for(var i=0;i<13;i++){
    if(pacman.isTouching(wallarray1[i])){
      pacman.collide(wallarray1[i])
    }
  }
  for(var i=0;i<13;i++){
    if(pacman.isTouching(wallarray3[i])){
      pacman.collide(wallarray3[i])
    }
  }
  for(var i=0;i<13;i++){
    if(pacman.isTouching(wallarray5[i])){
      pacman.collide(wallarray5[i])
    }
  }
  for(var i=0;i<7;i++){
    if(blueGhost.isTouching(wallarray2[i])){
      blueGhost.bounceOff(wallarray2[i])
    }
  }
  for(var i=0;i<7;i++){
    if(blueGhost.isTouching(wallarray4[i])){
      blueGhost.bounceOff(wallarray4[i])
    }
  }
  for(var i=0;i<7;i++){
    if(blueGhost.isTouching(wallarray6[i])){
      blueGhost.bounceOff(wallarray6[i])
    }
  }
  for(var i=0;i<13;i++){
    if(blueGhost.isTouching(wallarray1[i])){
      blueGhost.bounceOff(wallarray1[i])
    }
  }
  for(var i=0;i<13;i++){
    if(blueGhost.isTouching(wallarray3[i])){
      blueGhost.bounceOff(wallarray3[i])
    }
  }
  for(var i=0;i<13;i++){
    if(blueGhost.isTouching(wallarray5[i])){
      blueGhost.bounceOff(wallarray5[i])
    }
  }
  for(var i=0;i<7;i++){
    if(redGhost.isTouching(wallarray2[i])){
      redGhost.bounceOff(wallarray2[i])
    }
  }
  for(var i=0;i<7;i++){
    if(redGhost.isTouching(wallarray4[i])){
      redGhost.bounceOff(wallarray4[i])
    }
  }
  for(var i=0;i<7;i++){
    if(redGhost.isTouching(wallarray6[i])){
      redGhost.bounceOff(wallarray6[i])
    }
  }
  for(var i=0;i<13;i++){
    if(redGhost.isTouching(wallarray1[i])){
      redGhost.bounceOff(wallarray1[i])
    }
  }
  for(var i=0;i<13;i++){
    if(redGhost.isTouching(wallarray3[i])){
      redGhost.bounceOff(wallarray3[i])
    }
  }
  for(var i=0;i<13;i++){
    if(redGhost.isTouching(wallarray5[i])){
      redGhost.bounceOff(wallarray5[i])
    }
  }
    for(var i=0;i<7;i++){
      if(greenGhost.isTouching(wallarray2[i])){
        greenGhost.bounceOff(wallarray2[i])
      }
    }
    for(var i=0;i<7;i++){
      if(greenGhost.isTouching(wallarray4[i])){
        greenGhost.bounceOff(wallarray4[i])
      }
    }
    for(var i=0;i<7;i++){
      if(greenGhost.isTouching(wallarray6[i])){
        greenGhost.bounceOff(wallarray6[i])
      }
    }
    for(var i=0;i<13;i++){
      if(greenGhost.isTouching(wallarray1[i])){
        greenGhost.bounceOff(wallarray1[i])
      }
    }
    for(var i=0;i<13;i++){
      if(greenGhost.isTouching(wallarray3[i])){
        greenGhost.bounceOff(wallarray3[i])
      }
    }
    for(var i=0;i<13;i++){
      if(greenGhost.isTouching(wallarray5[i])){
        greenGhost.bounceOff(wallarray5[i])
      }
      for(var i=0;i<7;i++){
        if(lightgreenGhost.isTouching(wallarray2[i])){
          lightgreenGhost.bounceOff(wallarray2[i])
        }
      }
      for(var i=0;i<7;i++){
        if(lightgreenGhost.isTouching(wallarray4[i])){
          lightgreenGhost.bounceOff(wallarray4[i])
        }
      }
      for(var i=0;i<7;i++){
        if(lightgreenGhost.isTouching(wallarray6[i])){
          lightgreenGhost.bounceOff(wallarray6[i])
        }
      }
      for(var i=0;i<13;i++){
        if(lightgreenGhost.isTouching(wallarray1[i])){
          lightgreenGhost.bounceOff(wallarray1[i])
        }
      }
      for(var i=0;i<13;i++){
        if(lightgreenGhost.isTouching(wallarray3[i])){
          lightgreenGhost.bounceOff(wallarray3[i])
        }
      }
      for(var i=0;i<13;i++){
        if(lightgreenGhost.isTouching(wallarray5[i])){
          lightgreenGhost.bounceOff(wallarray5[i])
        }
      }
      for(var i=0;i<dotarray1.length;i++){
        if(pacman.isTouching(dotarray1[i])){
          dotarray1[i].visible = false
        }
      }
      if(pacman.isTouching(ghost_group)){
        lives = lives - 1
        pacman.x = 355
        pacman.y = 165
        console.log("touchesd")
      }
      text(mouseX+" , "+mouseY,mouseX,mouseY)
      if(redGhost.isTouching(dot1)){
        redGhost.velocityX=0
        redGhost.velocityY=5
      }
      if(redGhost.isTouching(dot2)){
        redGhost.velocityX=5
        redGhost.velocityY=0
      }
      if(redGhost.isTouching(dot3)){
        redGhost.velocityX=0
        redGhost.velocityY=-5
      }
      if(redGhost.isTouching(dot4)){
        redGhost.velocityX=-5
        redGhost.velocityY=0
      }
      if(redGhost.isTouching(dot5)){
        redGhost.velocityX=0
        redGhost.velocityY=5
      }
      dot1.visible = false
      dot2.visible = false
      dot3.visible = false
      dot4.visible = false
      dot5.visible = false
    
    
  }

  
  pacman.collide(edges[0])
  pacman.collide(edges[1])
  pacman.collide(edges[2])
  pacman.collide(edges[3])

  greenGhost.bounceOff(edges[0])
  greenGhost.bounceOff(edges[1])
  greenGhost.bounceOff(edges[2])
  greenGhost.bounceOff(edges[3])

  blueGhost.bounceOff(edges[0])
  blueGhost.bounceOff(edges[1])
  blueGhost.bounceOff(edges[2])
  blueGhost.bounceOff(edges[3])

  redGhost.bounceOff(edges[0])
  redGhost.bounceOff(edges[1])
  redGhost.bounceOff(edges[2])
  redGhost.bounceOff(edges[3])
  
  lightgreenGhost.bounceOff(edges[0])
  lightgreenGhost.bounceOff(edges[1])
  lightgreenGhost.bounceOff(edges[2])
  lightgreenGhost.bounceOff(edges[3])
 
  drawSprites();
}
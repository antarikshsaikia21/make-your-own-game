 var border1,border2,border3,border4,hole1,hole2,hole3,hole4,hole5,hole6;
 var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15;

 var cueBall1,cueStick1;

 var balls = [];

function preload() {
 
}

function setup() {
 createCanvas(displayWidth-10,displayHeight-160);

border1 = new border(0,2,width,40);
border2 = new border(0,580,width,40);
border3 = new border(0,0,40,height);
border4 = new border(1300,0,40,height);

hole1 = new Holes(60,62,40);
hole2 = new Holes(60,560,40);
hole3 = new Holes(width/2,560,40);
hole4 = new Holes(width/2,62,40);
hole5 = new Holes(width-75,62,40);
hole6 = new Holes(width-75,560,40);


for(var i = 0;i<10;i++){
    balls.push(new Balls(1125,275,30));
}

//ball1 = new Balls(1125,275,30);
//ball2 = new Balls(1150,230,30);
//ball3 = new Balls(1150,260,30);
//ball4 = new Balls(1150,290,30);
//ball5 = new Balls(1150,320,30);
//ball6 = new Balls(1150,350,30);
//ball7 = new Balls(1125,245,30);
//ball8 = new Balls(1125,305,30);
//ball9 = new Balls(1125,335,30);
//ball10 = new Balls(1100,260,30);
//ball11 = new Balls(1100,290,30);
//ball12 = new Balls(1100,320,30);
//ball13 = new Balls(1075,275,30);
//ball14 = new Balls(1075,305,30);
//ball15 = new Balls(1050,290,30);
  
cueBall1 = new Cueball(200,300,30)

cueStick1 = new CueStick(330,200,400,5);

}

function draw() {
background("green");

border1.display();
border2.display();
border3.display();
border4.display();
 
hole1.display();
hole2.display();
hole3.display();
hole4.display();
hole5.display();
hole6.display();

for(var i = balls.length-1;i>=0;i--){
  for(var w = 0;w<balls.length;w++){
    if(i!==w){
      balls[i].collide(balls[w]);
    }
  }
  balls[i].display();
  balls[i].move();
  var j = border1.checkHit(balls[i]);

  if(j===true){
      balls[i].vel.y=-balls[i].vel.y
  }

  if(border2.checkHit(balls[i])||border3.checkHit(balls[i])){
  balls[i].vel.y=-balls[i].vel.y
}

if( border1.checkHit(balls[i])||border4.checkHit(balls[i])){
   balls[i].vel.x=-balls[i].vel.x
}
}



//ball1.display();
//ball2.display();
//ball3.display();
//ball4.display();
//ball5.display();
//ball6.display();
//ball7.display();
//ball8.display();
//ball9.display();
//ball10.display();
//ball11.display();
//ball12.display();
//ball13.display();
//ball14.display();
//ball15.display();

cueBall1.display();

cueStick1.display();

line(300, 40, 300, 580);

}
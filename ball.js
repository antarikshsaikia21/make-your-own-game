class Balls{

    constructor(x,y,r){
     this.r = r;
     this.vel = createVector(Math.random()*1-1,Math.random()*1-1);
     this.acc = createVector();
     this.pos = createVector(x,y);
    }

    display(){
      fill("red");
      ellipse(this.pos.x,this.pos.y,this.r);
    }
     move(){
       this.vel.add(this.acc);
       this.pos.add(this.vel);
     }
    collide(ball){
     var distance = p5.Vector.sub(ball.pos,this.pos);
     var magnitude = distance.mag();
      if(magnitude<=ball.r+this.r){
        distance = distance.normalize();
        this.pos.sub(distance.mult(0.1));
        var sub = p5.Vector.sub(this.pos,ball.pos);
        sub = sub.normalize();
        var p = createVector(-sub.y,sub.x);
        p = p.normalize();
        var q = ball.vel.mag();
        this.vel.mult(0.9);
        ball.vel.mult(0.75);
        this.acc.add(sub.mult(0.5*q));
        ball.acc.add(-p.mult(0.5*q));
      }
    }

}
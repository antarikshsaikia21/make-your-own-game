class border{

    constructor(x,y,width,height){
     this.pos = createVector(x,y);
     this.width=width;
     this.height=height;
    }

    display(){
      fill("brown");
      rect(this.pos.x,this.pos.y,this.width,this.height);
    }
 
    checkHit(ball){
      var newVector = createVector();
      var value = 0;
      if(this.width>this.height){
         newVector  = createVector(ball.pos.x,this.pos.y);
        value = this.height/2;
      }   
      else{
        newVector = createVector(this.pos.x,ball.pos.y);
        value = this.width/2;
      }  
     var q = p5.Vector.sub(ball.pos,newVector);
      q = q.mag();
       if(value+ball.r>q){
         return true;
       }
       return false;
    }
}
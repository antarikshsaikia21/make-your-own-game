class Cueball {

    constructor(x,y,r){
     this.x = x;
     this.y = y;
     this.r = r;
    }

    display(){
      fill("white");
      ellipse(this.x,this.y,this.r);
    }

}
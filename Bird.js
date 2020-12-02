class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.ary = []
    this.smoke = loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
    var pos = [this.body.position.x,this.body.position.y]
    this.ary.push(pos);
    }
    console.log(this.ary)
    for(var i = 0; i < this.ary.length; i ++){
      image(this.smoke,this.ary[i][0],this.ary[i][1])
    }
  }
}

class Paper {
    constructor(x,y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':0.5,
          'isStatic':false
      }
      this.body = Matter.Bodies.circle(x, y, 20,options)
      this.diameter=20;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 70,70);
        pop();
      }
    }
  
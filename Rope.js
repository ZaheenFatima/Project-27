class rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    var options = {
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness : 0.04,
        length : 400,
        pointB : {x : offsetX, y: offsetY} 
       
    }
   this.rope = Matter.Constraint.create(options);
   World.add(world,this.rope); 
    }
 display(){
     strokeWeight(3);
   
     line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
 }

}
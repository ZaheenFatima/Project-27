class bob {
    constructor (x,y,radius){
        var paper_options = {
            restitution : 0.5,
            friction : 1.5,
            density :0.3
        }      
this.body = Bodies.circle(x,y,radius,paper_options);
this.radius = 50;
World.add(world,bob);
    }
   display (){
    fill("pink");
  ellipseMode(CENTER);
  ellipse(this.body.position.x,this.body.position.y,50);

}
}
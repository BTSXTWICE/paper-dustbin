class Paper
{
    constructor(x,y,r)
    {
this.Image=loadImage("paper.png");
var options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body);
}
display()
{
    var PaperPos=this.body.position;

    push();
    translate(PaperPos.x,PaperPos.y);
   
   imageMode(CENTER)
    image(this.Image,0,0,this.r,this.r);
    pop();

}





}



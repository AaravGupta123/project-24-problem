class Ground
{
constructor(x,y,width,height)
{
options={
      isStatic:true,
      friction:0.5,
      density:1
}

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display()
{
    var pos = this.body.position;
fill("green");
rect(pos.x,pos.y,this.width,this.height);

}
}
class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:2.2
        }
        this.body=Bodies.circle(x , y , 40 , options);
        this.radius=40;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        fill("hotpink")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}
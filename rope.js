class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA :bodyA,
            bodyB :bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            length:500,
            stiffness:0.7
        };
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var A=this.rope.bodyA.position;
        var B=this.rope.bodyB.position;
        line(A.x,A.y,B.x+this.offsetX,B.y+this.offsetY)
    }
}
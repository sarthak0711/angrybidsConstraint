class conStraint{

    constructor(a,b){

        var options = {
            bodyA:a,
            bodyB:b,
            length:200,
            stiffness:0.1
        }

        this.chain=Constraint.create(options);
        World.add(world,this.chain);
        console.log(this.chain)

    }

    display(){

        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position

        line(pointA.x,pointA.y,pointB.x,pointB.y)

    }


}
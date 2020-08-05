class Bob{
    constructor(x,y,width,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,width,radius,options);
        this.width=width;
        this.radius=radius;
        World.add(world,this.body);
    }

    display(){
        ellipseMode(CENTER);
        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,50,50);
        
    }



        
    }

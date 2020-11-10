class Dustbin {

    constructor (x,y,width,height)
    {
    var options = {isStatic: true}

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    
    this.dustbin = loadImage("dustbin.png");

    World.add(world, this.body);
    }
    
    display()
    {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        
        
        fill("white");
       // rect(pos.x, pos.y, this.width, this.height);
        
        image(this.dustbin, 835, 325, 230, 310);
    
    
    //rect(0, 0, this.width, this.height);
    //Matter.Body.setAngle(this.body, angle);
    pop();
    }
}
class Obstacle{
    constructor(x, y, width, height, image){
        var options = {
            friction: 0,
            density : 1
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        Matter.Body.setVelocity(this.body, {x:-15, y:0});
        this.image = image;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width*6, this.height*6);
    }
}
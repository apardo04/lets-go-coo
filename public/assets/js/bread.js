function Bread() {
    bread_sprite = createSprite();
    bread_sprite.addAnimation("default", bread_animation);
    bread_sprite.position.x = 300;
    bread_sprite.position.y = -100;
    bread_sprite.setCollider("rectangle",0,0,75,75);
    this.counter = 1; // Set to 1, so I can do counter % 10
    this.ready = false;
    this.dropping = false;
    //package_sprite.debug = true;
}
Bread.prototype.checkIfReady = function() {
    if (!robin.poweredUp && this.counter % 8 == 0 && !package.dropping && package_sprite.position.y > 0) {
        this.ready = true;
    }
}

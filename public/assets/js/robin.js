function Robin() {
    robin_sprite = createSprite();
    robin_sprite.addAnimation("default", robin_animation);
    robin_sprite.height = robinHeight;
    robin_sprite.width = robinWidth;
    robin_sprite.position.x = robinWidth/2;
    robin_sprite.position.y = robinHeight/2;
    robin_sprite.setCollider("circle",0,0,62);
    this.poweredUp = false;
    //robin_sprite.debug = true;
}

Robin.prototype.keyPressed = function() {
    if (robin_sprite.position.x - robin_sprite.width / 2 > 0) {
        if (keyIsDown(LEFT_ARROW))
            robin_sprite.position.x += -7;
    }
    if (robin_sprite.position.x + robin_sprite.width / 2 < width) {
        if (keyIsDown(RIGHT_ARROW))
            robin_sprite.position.x += 7;
    }
    if (robin_sprite.position.y - robin_sprite.height / 2 > 0) {
        if (keyIsDown(UP_ARROW))
            robin_sprite.position.y += -7;
    }
    if (robin_sprite.position.y + robin_sprite.height / 2 + 55 < height) {
        if (keyIsDown(DOWN_ARROW))
            robin_sprite.position.y += 7;
    }
};

Robin.prototype.powerUp = function() {
    this.poweredUp = true;
    console.log("poweredUp = " + this.poweredUp)
};
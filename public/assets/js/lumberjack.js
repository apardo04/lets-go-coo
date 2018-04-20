function Lumberjack() {
    lumberjack_sprite = createSprite();
    lumberjack_sprite.addAnimation("default", lumberjack_animation);
    this.width = 100;
    this.height = 180;
    lumberjack_sprite.position.x = -20;
    lumberjack_sprite.position.y = height - this.height/2 - 40;
    lumberjack_sprite.attractionPoint(6, -width, height - this.height/2 - 40);
    lumberjack_sprite.setCollider("rectangle",0,0,100,165);
    //lumberjack_sprite.debug = true;
}

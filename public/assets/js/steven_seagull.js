function Seagull() {
    seagull_sprite = createSprite();
    seagull_sprite.addAnimation("default", seagull_animation);
    seagull_sprite.width = 130;
    seagull_sprite.height = 140;
    seagull_sprite.position.x = -seagull_sprite.width;
    seagull_sprite.position.y = 100;
    seagull_sprite.attractionPoint(6, -width, 100);
    seagull_sprite.setCollider("rectangle",0,0,150,85);
    //seagull_sprite.debug = true;
}

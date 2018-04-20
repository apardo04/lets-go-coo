function Turd(x, y) {
    turd_sprite = createSprite();
    turd_sprite.addAnimation("default", turd_animation);
    turds.add(turd_sprite);
    turd_sprite.position.x = x;
    turd_sprite.position.y = y;
    //turd_sprite.debug = true;
}

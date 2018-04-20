function Shkreli() {
    shkreli_sprite = createSprite();
    shkreli_sprite.addAnimation("default", shkreli_animation);
    this.width = 105.22;
    this.height = 206;
    shkreli_sprite.position.x = -width;
    shkreli_sprite.position.y = height - 150;
    shkreli_sprite.setCollider("rectangle",0,0,100,165);
    //shkreli_sprite.debug = true;
}

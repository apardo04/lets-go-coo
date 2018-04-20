function Kardashian() {
    kardashian_sprite = createSprite();
    kardashian_sprite.addAnimation("default", kardashian_animation);
    this.width = 105.22;
    this.height = 206;
    kardashian_sprite.position.x = -width;
    kardashian_sprite.position.y = height - 150;
    kardashian_sprite.setCollider("rectangle",0,0,100,165);
    //kardashian_sprite.debug = true;
}

function Kite() {
    kite_sprite = createSprite();
    kite_sprite.addAnimation("default", kite_animation);
    kite_sprite.width = 150;
    kite_sprite.height = 191;
    kite_sprite.position.x = -width;
    kite_sprite.position.y = 100;
    kite_sprite.setCollider("rectangle",-40,-30,55,105);
    this.dir= 25;
    this.go = false;
    //kite_sprite.debug = true;
}

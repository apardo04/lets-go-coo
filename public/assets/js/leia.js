function Leia() {
    leia_sprite = createSprite();
    leia_sprite.addImage(loadImage("assets/img/pigeon_leia.png"));
    leia_sprite.width = 150;
    leia_sprite.height = 128;
    leia_sprite.position.x = -width;
    leia_sprite.position.y = -height;

    leia_bubble_sprite = createSprite();
    leia_bubble_sprite.addImage(loadImage("assets/img/leia_bubble.png"));
    leia_bubble_sprite.position.x = -width;
    leia_bubble_sprite.position.y = -height;

}

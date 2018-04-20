function Fountain() {
    fountain_sprite = createSprite();
    fountain_sprite.addImage(loadImage("assets/img/fountain.png"));
    fountain_sprite.width = 242;
    fountain_sprite.height = 329;
    fountain_sprite.position.x = -width;
    fountain_sprite.position.y = -height;
}

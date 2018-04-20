function Lose() {
    this.width = 225;
    this.height = 350;
    lose_sprite = createSprite();
    lose_sprite.addImage(loseImg);
    lose_sprite.width = this.width;
    lose_sprite.height = this.height;
    lose_sprite.position.x = width + this.width;
    lose_sprite.position.y = height/2;
}

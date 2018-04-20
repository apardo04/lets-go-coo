function Package() {
    package_sprite = createSprite();
    package_sprite.addImage(packageImg);
    package_sprite.position.x = 300;
    package_sprite.position.y = -100;
    package_sprite.setCollider("rectangle",0,0,75,75);
    this.dropping = false;
    //package_sprite.debug = true;
}

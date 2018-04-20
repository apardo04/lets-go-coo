function Trump() {
    trump_sprite = createSprite();
    trump_sprite.addAnimation("default", trump_animation);
    this.width = 105.22;
    this.height = 206;
    trump_sprite.position.x = -width;
    trump_sprite.position.y = height - 150;
    //trump_sprite.attractionPoint(6, -width, height - this.height/2 - 40);
    trump_sprite.setCollider("rectangle",0,0,100,165);
    //trump_sprite.debug = true;
}

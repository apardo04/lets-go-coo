function Hipster() {
    hipster_sprite = createSprite();
    hipster_sprite.addAnimation("default", hipster_animation);
    this.width = 100;
    this.height = 180;
    hipster_sprite.position.x = -20;
    hipster_sprite.position.y = height - this.height/2 - 40;
    hipster_sprite.attractionPoint(6, -width, height - this.height/2 - 40);
    hipster_sprite.setCollider("rectangle",0,0,100,165);
    //hipster_sprite.debug = true;
}
function RunningHipster() {
    runningHipster_sprite = createSprite();
    runningHipster_sprite.addAnimation("default", runningHipster_animation);
    this.width = 100;
    this.height = 195;
    runningHipster_sprite.position.x = -20;
    runningHipster_sprite.position.y = height - this.height/2 - 40;
    runningHipster_sprite.attractionPoint(9, -width, height - this.height/2 - 40);
    runningHipster_sprite.setCollider("rectangle",0,0,100,165);
    //runningHipster_sprite.debug = true;
}

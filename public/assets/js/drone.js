function Drone() {
    drone_sprite = createSprite();
    drone_sprite.addAnimation("default", drone_animation);
    drone_sprite.width = 150;
    drone_sprite.height = 85;
    drone_sprite.position.x = -drone_sprite.width;
    drone_sprite.position.y = 100;
    drone_sprite.attractionPoint(6, -width, 100);
    drone_sprite.setCollider("rectangle",0,0,150,85);
    //drone_sprite.debug = true;
}

Drone.prototype.packageDrop = function() {
    if (bread.ready) {
        if (drone_sprite.position.x - robin_sprite.position.x > 50 && !bread.dropping) {
            bread_sprite.position.x = drone_sprite.position.x;
            bread_sprite.position.y = drone_sprite.position.y + 50;
        }
        else if (bread_sprite.position.y - bread_sprite.height > height) {
            bread_sprite.position.y = -100;
            bread.dropping = false;
            bread.ready = false;
        }
        else if (package_sprite.position.y > 0) {
            bread_sprite.position.y += 4;
            bread.dropping = true;
        }
    }
    else {
        if (drone_sprite.position.x - robin_sprite.position.x > 50 && !package.dropping) {
            package_sprite.position.x = drone_sprite.position.x;
            package_sprite.position.y = drone_sprite.position.y + 50;
        }
        else if (package_sprite.position.y - package_sprite.height > height) {
            package_sprite.position.y = -100;
            package.dropping = false;
        }
        else if (package_sprite.position.y > 0) {
            package_sprite.position.y += 4;
            package.dropping = true;
        }
    }
};
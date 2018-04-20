function Tree() {
    tree_sprite = createSprite();
    tree_sprite.addImage(loadImage("assets/img/tree_1.png"));
    tree_sprite.width = 290;
    tree_sprite.height = 278;
    tree_sprite.position.x = width + tree_sprite.width * 2;
    tree_sprite.position.y = height - tree_sprite.height/2 - 35;
    tree_sprite.depth = -1;
    this.xdir = -5;
    this.rand_tree = 1;
    tree_sprite.setCollider("rectangle",0,0,200,275);
    //tree_sprite.debug = true;
}
Tree.prototype.move = function() {
    tree_sprite.position.x += this.xdir;
}
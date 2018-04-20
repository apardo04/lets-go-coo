let robin, leia, trump, kardashian, shkreli, seagull, tree, kite, drone, turd, bread, package, keyboard, fountain, lose;
let clickTime = -1000;
let robinWidth = 150;
let robinHeight = 139;
let robin_sheet, robin_animation, trump_sheet, trump_animation, kardashian_sheet, kardashian_animation, shkreli_sheet, shkreli_animation, seagull_sheet, seagull_animation, drone_sheet, drone_animation, kite_sheet, kite_animation, bread_sheet, bread_animation, packageImg, keyboardImg, loseImg;
let robin_sprite, leia_sprite, trump_sprite, kardashian_sprite, shkreli_sprite, seagull_sprite, tree_sprite, kite_sprite, drone_sprite, turd_sprite, bread_sprite, package_sprite, fountain_sprite, keyboard_sprite, leia_bubble_sprite, lose_sprite;
let fart, grunt;
let objects, trees, flyers, turds, targets;
let score = 0;
let readyButton, loseButton;
let ready = false;

function preload() {
    robin_sheet = loadSpriteSheet('assets/img/coo_sheet.png',132,122,9);
    robin_animation = loadAnimation(robin_sheet);
    turd_sheet = loadSpriteSheet('assets/img/turd_sheet.png',29,60,4);
    turd_animation = loadAnimation(turd_sheet);
    trump_sheet = loadSpriteSheet('assets/img/trump_sheet.png', 110, 230, 9);
    trump_animation = loadAnimation(trump_sheet);
    kardashian_sheet = loadSpriteSheet('assets/img/kardashian_sheet.png', 93, 210, 9);
    kardashian_animation = loadAnimation(kardashian_sheet);
    shkreli_sheet = loadSpriteSheet('assets/img/shkreli_sheet.png', 110, 206, 9);
    shkreli_animation = loadAnimation(shkreli_sheet);
    seagull_sheet = loadSpriteSheet('assets/img/steven_seagull_sheet.png',144,140,10);
    seagull_animation = loadAnimation(seagull_sheet);
    drone_sheet = loadSpriteSheet('assets/img/drone_sheet.png',150,85,8);
    drone_animation = loadAnimation(drone_sheet);
    kite_sheet = loadSpriteSheet('assets/img/kite_sheet.png',150,191,8);
    kite_animation = loadAnimation(kite_sheet);
    bread_sheet = loadSpriteSheet('assets/img/bread_sheet.png',140,106,6);
    bread_animation = loadAnimation(bread_sheet);
    packageImg = loadImage("assets/img/amazon_package.png");
    keyboardImg = loadImage("assets/img/keyboard.png");
    loseImg = loadImage("assets/img/you_lose.png");
    //fart = loadSound("assets/audio/fart.wav");
    //grunt = loadSound("assets/audio/grunt.wav");
}

function setup() {
    let myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent("canvas");
    targets = new Group();
    turds = new Group();
    objects = new Group();
    trees = new Group();
    flyers = new Group();
    robin = new Robin();
    kite = new Kite();
    bread = new Bread();
    package = new Package();
    drone = new Drone();
    trump = new Trump();
    kardashian = new Kardashian();
    shkreli = new Shkreli();
    seagull = new Seagull();
    keyboard = new Keyboard();
    tree = new Tree();
    lose = new Lose();
    //leia = new Leia();
    //fountain = new Fountain();
    //fart.setVolume(0.1);
    //grunt.setVolume(0.1);
    objects.add(kite_sprite);
    objects.add(drone_sprite);
    objects.add(trump_sprite);
    objects.add(kardashian_sprite);
    objects.add(shkreli_sprite);
    objects.add(seagull_sprite);
    objects.add(package_sprite);
    objects.add(tree_sprite);
    flyers.add(drone_sprite);
    flyers.add(seagull_sprite);
    targets.add(trump_sprite);
    targets.add(kardashian_sprite);
    targets.add(shkreli_sprite);
    targets.add(drone_sprite);
    targets.add(kite_sprite);
    targets.add(seagull_sprite);
    if ($(window).width() >= 960) {
        readyButton = createButton('Play!', 'Play');
        readyButton.position(width / 2 - 75, height / 2 + 110);
    }
}

function draw() {
    clear();
    if (!ready){
        drawSprite(keyboard_sprite);
        readyButton.mousePressed(function () {
            removeMenu();
        });
    }
    else {
        drawSprite(bread_sprite);
        objects.draw();
        drawSprite(robin_sprite);
        drawSprite(turd_sprite);
        tree.move();
        robin.keyPressed();
        robin_sprite.overlap(objects, gameOver);
        robin_sprite.overlap(bread_sprite, robin.powerUp);
        drone.packageDrop();
        bread.checkIfReady();

        // Flyers Spawning Code
        for (let i = 0; i < flyers.length; i++) {
            if (flyers[i].position.x + flyers[i].width < 0) {
                flyers[i].setSpeed(0,0);
                flyers[i].position.x = flyers[i].width + width;
                let rand_y = Math.floor(Math.random() * height/2) + flyers[i].height;
                flyers[i].position.y = rand_y;
                //console.log(rand_y);
                let rand = Math.floor(Math.random() * 9000) + 1000;
                //console.log(rand + "  flyer");
                setTimeout(function() {
                    flyers[i].setSpeed(-(6+score/5),0);
                    bread.counter++;
                    //console.log("timeout  flyer")
                }, rand);
            }
        }
        // Kite Spawning Code
        if (kite_sprite.position.x + kite_sprite.width < 0) {
            kite.go = false;
            kite_sprite.setSpeed(0,0);
            kite_sprite.position.x = kite_sprite.width + width;
            let rand_y = Math.floor(Math.random() * height/2) + kite_sprite.height;
            kite_sprite.position.y = rand_y;
            //console.log(rand_y);
            let rand = Math.floor(Math.random() * 9000) + 1000;
            //console.log(rand + "  kite");
            setTimeout(function() {
                kite.go = true;
            }, rand);
        }
        if (kite.go) {
            kite_sprite.setSpeed(-4, kite.dir);
            if (kite_sprite.position.y - kite_sprite.height / 2 < 0)
                kite.dir = -25;
            else if (kite_sprite.position.y + kite_sprite.height / 2 > height - 50)
                kite.dir = 25;
        }
        // Tree Spawning Code
        if (tree_sprite.position.x + tree_sprite.width < 0) {
            tree_sprite.position.x = 300 + width;
            tree.xdir = 0;
            if (tree.rand_tree < 3) {
                tree.rand_tree++;
                if (tree.rand_tree == 2)
                    tree_sprite.position.y = height - tree_sprite.height/2 - 55;
                else
                    tree_sprite.position.y = height - tree_sprite.height/2 - 40;
            }
            else {
                tree.rand_tree = 1;
                tree_sprite.position.y = height - tree_sprite.height/2 - 35;
            }
            tree_sprite.addImage(loadImage("assets/img/tree_" + tree.rand_tree + ".png"));
            tree_sprite.width = 240;
            tree_sprite.height = 278;
            let rand = Math.floor(Math.random() * 6000) + 1000;
            //console.log(rand + " tree");
            setTimeout(function() {
                tree.xdir = -5;
                //console.log("timeout tree")
            }, rand);
        }
        // Targets Spawning Code
        for (let i = 0; i < targets.length; i++) {
            if (targets[i].position.x + targets[i].width < 0) {
                targets[i].position.x = targets[i].width + width;
                targets[i].setSpeed(0,0);
                let rand = Math.floor(Math.random() * 9000) + 1000;
                //console.log(rand + "  target");
                setTimeout(function() {
                    targets[i].setSpeed(-6,0);
                    //console.log("timeout  target")
                }, rand);
            }
            // Turds Overlapping Targets or Flyers Code
            for (let j = turds.length - 1; j >= 0; j--) {
                turds[j].position.y += 3;
                turds[j].overlap(targets[i], function() {
                    score += 1;
                    turds[j].remove();
                    targets[i].position.x = -200;
                    $('#score').text(score);
                    //grunt.play();
                });
                if (turds.length > 0 && turds[j].position.y > height) {
                    turds[j].remove();
                }
            }
        }
        //console.log("Frame Rate: " + frameRate())
    }
}


function keyPressed() {
    if (key === ' ') {
        if (millis() - clickTime >= 1000) {
            turd = new Turd(robin_sprite.position.x - 45, robin_sprite.position.y + 70);
            clickTime = millis();
            //fart.play();
        }
    }
}

function gameOver() {
    robin_sprite.mirrorY(-1);
    robin_sprite.attractionPoint(1, robin_sprite.position.x, height * 2);
    //robin_sprite.position.x = width + 600;
    $("#logo-font").show();
    $("div#donate").show();
    $("#menu").show();
    lose_sprite.position.x = width / 2;
    loseButton = createButton('Main Menu', 'menu-button');
    loseButton.position(width / 2 - 57, height / 2 + 100);
    loseButton.mousePressed(function () {
        location.reload();
    });
}

function removeMenu() {
    $("#logo-font").hide();
    $("#menu").hide();
    $("div#donate").hide();
    keyboard_sprite.remove();
    readyButton.remove();
    ready = true;
}

let robin, leia, hipster, lumberjack, runningHipster, tree, kite, drone, turd, package, fountain, text, lose, time;
let clickTime = -1000;
let robinWidth = 150;
let robinHeight = 139;
let runningHipsterWidth = 104;
let runningHipsterHeight = 195;
let runningHipster_cycle;
let robin_sheet, robin_animation, turd_sheet, turd_animation, hipster_sheet, hipster_animation, lumberjack_sheet, lumberjack_animation, runningHipster_sheet, runningHipster_animation, drone_sheet, drone_animation, kite_sheet, kite_animation, packageImg, textImg, keyboardImg, loseImg, comingsoonImg, errorImg;
let robin_sprite, leia_sprite, poop_sprite, hipster_sprite, lumberjack_sprite, runningHipster_sprite, tree_sprite, kite_sprite, drone_sprite, turd_sprite, package_sprite, fountain_sprite, text_sprite, keyboard_sprite, leia_bubble_sprite, lose_sprite, comingsoon_sprite;
let fart, grunt;
let objects, trees, flyers, turds, hipsters;
let score = 0;
let readyButton, survivalButton, loseButton;
let ready = false;

function preload() {
    runningHipster_cycle =[
        {"name":"run_cycle01", "frame":{"x":runningHipsterWidth*7, "y":0, "width":runningHipsterWidth, "height": runningHipsterHeight}},
        {"name":"run_cycle02", "frame":{"x":runningHipsterWidth*6, "y":0, "width":runningHipsterWidth, "height": runningHipsterHeight}},
        {"name":"run_cycle03", "frame":{"x":runningHipsterWidth*5, "y":0, "width":runningHipsterWidth, "height": runningHipsterHeight}},
        {"name":"run_cycle04", "frame":{"x":runningHipsterWidth*4, "y":0, "width":runningHipsterWidth, "height": runningHipsterHeight}},
        {"name":"run_cycle05", "frame":{"x":runningHipsterWidth*3, "y":0, "width":runningHipsterWidth, "height": runningHipsterHeight}},
        {"name":"run_cycle06", "frame":{"x":runningHipsterWidth*2, "y":0, "width":runningHipsterWidth, "height": runningHipsterHeight}},
        {"name":"run_cycle07", "frame":{"x":runningHipsterWidth, "y":0, "width":runningHipsterWidth, "height": runningHipsterHeight}}
    ];
    robin_sheet = loadSpriteSheet('assets/img/pigeon_sheet.png',150,139,9);
    robin_animation = loadAnimation(robin_sheet);
    turd_sheet = loadSpriteSheet('assets/img/turd_sheet.png',29,60,4);
    turd_animation = loadAnimation(turd_sheet);
    lumberjack_sheet = loadSpriteSheet('assets/img/hipster_lumberjack_sheet.png', 100, 180, 6);
    lumberjack_animation = loadAnimation(lumberjack_sheet);
    hipster_sheet = loadSpriteSheet('assets/img/hipster_beard_sheet.png', 100, 180, 6);
    hipster_animation = loadAnimation(hipster_sheet);
    runningHipster_sheet = loadSpriteSheet('assets/img/running_hipster_sheet.png', runningHipster_cycle);
    runningHipster_animation = loadAnimation(runningHipster_sheet);
    drone_sheet = loadSpriteSheet('assets/img/drone_sheet.png',150,85,8);
    drone_animation = loadAnimation(drone_sheet);
    kite_sheet = loadSpriteSheet('assets/img/kite_sheet.png',150,191,8);
    kite_animation = loadAnimation(kite_sheet);
    packageImg = loadImage("assets/img/amazon_package.png");
    textImg = loadImage("assets/img/episode1_intro.png");
    comingsoonImg = loadImage("assets/img/coming_soon.png");
    errorImg = loadImage("assets/img/introText_error.png");
    keyboardImg = loadImage("assets/img/keyboard.png");
    loseImg = loadImage("assets/img/you_lose.png");
    //fart = loadSound("assets/audio/fart.wav");
    //grunt = loadSound("assets/audio/grunt.wav");
}

function setup() {
    let myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent("canvas");
    hipsters = new Group();
    turds = new Group();
    objects = new Group();
    trees = new Group();
    flyers = new Group();
    robin = new Robin();
    leia = new Leia();
    tree = new Tree();
    kite = new Kite();
    package = new Package();
    drone = new Drone();
    hipster = new Hipster();
    lumberjack = new Lumberjack();
    runningHipster = new RunningHipster();
    fountain = new Fountain();
    text = new Text();
    lose = new Lose();
    //fart.setVolume(0.1);
    //grunt.setVolume(0.1);
    objects.add(tree_sprite);
    objects.add(kite_sprite);
    objects.add(drone_sprite);
    objects.add(hipster_sprite);
    objects.add(lumberjack_sprite);
    objects.add(runningHipster_sprite);
    objects.add(package_sprite);
    trees.add(tree_sprite);
    //flyers.add(kite_sprite);
    flyers.add(drone_sprite);
    hipsters.add(hipster_sprite);
    hipsters.add(lumberjack_sprite);
    hipsters.add(runningHipster_sprite);
    hipsters.add(drone_sprite);
    hipsters.add(kite_sprite);
    if ($(window).width() >= 960) {
        readyButton = createButton('Story Mode!', 'Story Mode');
        readyButton.position(width / 2 - 150, height / 2 + 110);
        survivalButton = createButton('Survival Mode!', 'Survival Mode!');
        survivalButton.position(width / 2 + 40, height / 2 + 110);
    }
}

function draw() {
    clear();
    if (!ready){
        drawSprite(text_sprite);
        drawSprite(keyboard_sprite);
        readyButton.mousePressed(function () {
            removeMenu();
        });
        survivalButton.mousePressed(function () {
            window.location.replace("../survival.html")
        });
    }
    else if (score < 25){
        drawSprites();
        tree.move();
        robin.keyPressed();
        robin_sprite.overlap(objects, gameOver);
        drone.packageDrop();

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
                    flyers[i].setSpeed(-6,0);
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
        // Hipsters Spawning Code
        for (let i = 0; i < hipsters.length; i++) {
            if (hipsters[i].position.x + hipsters[i].width < 0) {
                hipsters[i].position.x = hipsters[i].width + width;
                let hipHeight = hipsters[i].height/2
                if (hipsters[i].height == runningHipsterHeight)
                    hipsters[i].attractionPoint(-9,-width, height - hipHeight - 40);
                else
                    hipsters[i].attractionPoint(-6,-width, height - hipHeight - 40);
                let rand = Math.floor(Math.random() * 9000) + 1000;
                console.log(rand + "  hip");
                setTimeout(function() {
                    if (hipsters[i].height == runningHipsterHeight)
                        hipsters[i].attractionPoint(9,-width, height - hipHeight - 40);
                    else
                        hipsters[i].attractionPoint(6,-width, height - hipHeight - 40);
                    //console.log("timeout  hip")
                }, rand);
            }
            // Turds Overlapping Hipsters or Flyers Code
            for (let j = turds.length - 1; j >= 0; j--) {
                turds[j].position.y += 2.5;
                turds[j].overlap(hipsters[i], function() {
                    score += 1;
                    turds[j].remove();
                    hipsters[i].position.x = -200;
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
    // End of Episode 1
    else {
        drawSprite(fountain_sprite);
        fountain_sprite.position.x = width/2 + 100;
        fountain_sprite.position.y = height - fountain_sprite.height/2 - 25;
        drawSprite(robin_sprite);
        robin_sprite.position.x = width/2 - 300;
        robin_sprite.position.y = height - fountain_sprite.height - 25;
        drawSprite(leia_sprite);
        leia_sprite.position.x = width/2 + 115 - fountain_sprite.width/4;
        leia_sprite.position.y = height - fountain_sprite.height - 25;
        drawSprite(leia_bubble_sprite);
        leia_bubble_sprite.position.x = width/2 + 200;
        leia_bubble_sprite.position.y = height - fountain_sprite.height - 250;
        drawSprite(comingsoon_sprite);
        comingsoon_sprite.position.x = width / 2 - 200;
        comingsoon_sprite.position.y = height / 2 - 210;
        $("#menu").show();
        $("div#donate").show();
        loseButton = createButton('Play Again','menu-button');
        loseButton.position(width / 2 - 325, height/2 - 100);
        loseButton.mousePressed(function() {location.reload();});
    }
}


function keyPressed() {
    if (key === ' ') {
        if (millis() - clickTime >= 1000) {
            turd = new Turd(robin_sprite.position.x, robin_sprite.position.y);
            clickTime = millis();
            //fart.play();
        }
    }
}

function gameOver() {
    robin_sprite.mirrorY(-1);
    robin_sprite.attractionPoint(1,robin_sprite.position.x, height*2);
    //robin_sprite.position.x = width + 600;
    $("div#donate").show();
    $("#menu").show();
    lose_sprite.position.x = width / 2;
    loseButton = createButton('Main Menu','menu-button');
    loseButton.position(width / 2 - 57, height / 2 + 100);
    loseButton.mousePressed(function () {location.reload();});
}

function removeMenu() {
    $("#menu").hide();
    $("div#donate").hide();
    text_sprite.remove();
    keyboard_sprite.remove();
    readyButton.remove();
    survivalButton.remove();
    ready = true;
}
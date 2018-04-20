function Text() {
    text_sprite = createSprite();
    if ($(window).width() >= 960) {
        text_sprite.addImage(textImg);
        text_sprite.width = 876;
        text_sprite.height = 296;
        text_sprite.position.x = width / 2;
        text_sprite.position.y = height / 2 - 100;

        keyboard_sprite = createSprite();
        keyboard_sprite.addImage(keyboardImg);
        keyboard_sprite.position.x = width - 250;
        keyboard_sprite.position.y = height - 200;

        comingsoon_sprite = createSprite();
        comingsoon_sprite.addImage(comingsoonImg);
        comingsoon_sprite.position.x = -width;
        comingsoon_sprite.position.y = -height;
    }
}

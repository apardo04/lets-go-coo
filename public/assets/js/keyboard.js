function Keyboard() {
    text_sprite = createSprite();
    if ($(window).width() >= 960) {
        keyboard_sprite = createSprite();
        keyboard_sprite.addImage(keyboardImg);
        keyboard_sprite.position.x = 250;
        keyboard_sprite.position.y = height - 200;
    }
}

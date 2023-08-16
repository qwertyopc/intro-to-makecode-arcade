controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.spray)
})
let mySprite: Sprite = null
scene.setBackgroundColor(2)
game.splash("Abc")
mySprite = sprites.create(img`
    . . . . . . 3 . . . . . . . . . 
    . . . . . 3 3 3 . . . . 3 . . 3 
    . . 3 3 3 . 3 3 . . 3 3 3 . . 3 
    . . 3 3 3 3 3 3 . 3 . 3 3 . . 3 
    . . 3 3 . 3 3 3 3 . . 3 3 . 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 . 3 . 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 . . 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 . . 3 3 . 3 . 3 . 
    3 3 3 3 3 3 . . . 3 3 . 3 . 3 . 
    3 3 3 3 3 3 . 3 3 3 3 3 3 . 3 . 
    3 . 3 3 3 3 . . 3 . 3 . 3 3 . . 
    3 3 3 3 3 3 . 3 3 3 3 . 3 3 . . 
    3 3 3 3 3 3 3 3 3 3 3 . 3 3 . . 
    . 3 3 . 3 . 3 3 3 . 3 3 3 . . . 
    . . . . 3 3 3 . . . . . . . . . 
    `, SpriteKind.Player)

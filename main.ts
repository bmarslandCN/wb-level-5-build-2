namespace SpriteKind {
    export const EatenFood = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    // or destroy sprite?
    otherSprite.setKind(SpriteKind.EatenFood)
    otherSprite.setImage(img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c c c c c c b c c 3 c 
        c 3 c c c c c c c c c c c c 3 c 
        . f b b c c c c c c c c b b f . 
        . . f b b c 8 9 9 8 c b b f . . 
        . . c c c f 9 3 1 9 f c c c . . 
        . c 3 f f f 9 3 3 9 f f f 3 c . 
        c 3 f f f f 8 9 9 8 f f f f 3 c 
        f 3 c c f f f f f f f f c c 3 f 
        f b 3 c b b f b b f b b c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `)
})
// optional- I thought it may be helpful to show an increase score and a decrease score but i'm not sure if this makes it too complicated. 
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    shark.setPosition(142, 107)
    pirate.say("ouch!")
    music.buzzer.play()
})
/**
 * Explore:
 * 
 * 1) 1 player, 2 food sprites. notice how the score increases too quickly. Drag in a change sprite kind or destroy sprite so that the score only goes up by 1.
 * 
 * 2) 1 player, 1 enemy. set the score to be 5. notice how the score decreases too quickly on overlap. drag in a move sprite position or destroy sprite so that the score only goes down by 1. 
 * 
 * 3)  1 player, 2 foods, 1 enemy.. Exploded code: On Countdown end, game over win. "The game doesn't end even when time runs out! use the code blocks so that the game ends.
 * 
 * Solve:
 * 
 * 1).  the score increases too quickly! fix the bug so that the score only increases by 1 at overlap.
 * 
 * 2) sprite kind bug- there is a change score by -1 but the sprite kind is not set to enemy.
 * 
 * 3) there is no start countdown block in the on start but there is an on countdown end. "drag in a code block so a timer starts"
 */
let shark: Sprite = null
let pirate: Sprite = null
scene.setBackgroundColor(8)
effects.bubbles.startScreenEffect()
game.showLongText("Collect as many pearls as you can before time runs out.", DialogLayout.Bottom)
game.showLongText("Stay away from the shark!", DialogLayout.Bottom)
info.setScore(0)
info.startCountdown(7)
pirate = sprites.create(img`
    . . . . . 5 5 f 5 5 . . . . . . . 
    . . . . 5 f 5 f 5 f 5 . . . . . . 
    . . . 5 f f f f f f 5 . . . . . . 
    . . 5 f f f d 1 1 f f 5 . . . . . 
    5 5 f f f f f d f f f f 5 5 . . . 
    . f f f f 2 2 2 2 2 f f f b . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . f c f f f f f f f f . . . . 
    . . . f b b b b f f f b f . . . . 
    . . f c f 1 b b b b b f c f . . . 
    . f c c c 2 1 1 1 1 2 c c c f . . 
    . f c f c c 2 2 2 2 c c f f f . . 
    . f b f f c c 9 9 c c f f b f . . 
    . . f f 8 f f 4 4 e e e f f . . . 
    . . . . f 8 8 8 f f e f f . . . . 
    . . . f f f f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(pirate)
pirate.setStayInScreen(true)
let clam1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
clam1.setPosition(136, 17)
let clam2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
clam2.setPosition(108, 18)
let clam3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
clam3.setPosition(140, 84)
let clam4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
clam4.setPosition(7, 103)
let clam5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
clam5.setPosition(150, 58)
let clam6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
clam6.setPosition(41, 105)
let clam7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
clam7.setPosition(24, 4)
let clam8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
clam8.setPosition(102, 46)
let clam9 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
clam9.setPosition(30, 52)
let clam10 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Food)
clam10.setPosition(97, 96)
shark = sprites.create(img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `, SpriteKind.Enemy)
shark.setPosition(142, 107)
shark.follow(pirate, 40)

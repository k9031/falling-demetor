namespace SpriteKind {
    export const Gap = SpriteKind.create()
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
// game over when when falling out of screen
game.onUpdate(function() {
    if (dementor.top > 120) {
game.over(false)
    }
})
// Game over when jumping out of the screen
game.onUpdate(function() {
    if (dementor.bottom > 120) {
        game.over(false)
    }
})
startGame()
input.onButtonPressed(Button.A, function () {
    basic.showNumber(32)
})
basic.forever(function () {
    if (input.lightLevel() < 130) {
        basic.showString("Esta escuro!")
    } else {
        basic.showString("Esta claro!")
    }
})
basic.forever(function () {
    if (input.lightLevel() < 130) {
        music.playMelody("C5 G B A F A C5 B ", 100)
    } else {
        music.playMelody("A F E F D G E F ", 300)
    }
})

let tenperatura = 0
music.setVolume(214)
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 24) {
        music.playTone(698, music.beat(BeatFraction.Eighth))
        music.playTone(196, music.beat(BeatFraction.Eighth))
    }
    if (input.temperature() > 24) {
        music.playTone(698, music.beat(BeatFraction.Eighth))
        music.playTone(196, music.beat(BeatFraction.Eighth))
    }
})
basic.forever(function () {
    tenperatura = input.temperature()
    if (input.temperature() < 20) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (input.temperature() > 24) {
        basic.showIcon(IconNames.Square)
    }
})

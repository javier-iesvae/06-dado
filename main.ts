input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    n = randint(1, 6)
    if (n == 1) {
        basic.showString("1")
    } else if (n == 2) {
        basic.showString("2")
    } else if (n == 3) {
        basic.showString("3")
    } else if (n == 4) {
        basic.showString("4")
    } else if (n == 5) {
        basic.showString("5")
    } else {
        basic.showString("6")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
let n = 0
basic.showString("HOLA")

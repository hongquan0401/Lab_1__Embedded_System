radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . # . . #
            . # # # #
            . # . . #
            `)
    } else {
        basic.showLeds(`
            . . # # .
            . . # . #
            . . # # .
            . . # . #
            . . # # .
            `)
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.forever(function () {
    if (input.temperature() >= 30) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
    }
})

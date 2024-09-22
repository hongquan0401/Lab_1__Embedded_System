radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
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
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.forever(function on_forever() {
    if (input.temperature() >= 30) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
    }
    
})

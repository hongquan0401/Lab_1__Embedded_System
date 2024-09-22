input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . . . .
        . . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . # . . .
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . #
        . . . . .
        . . . . #
        . . . # .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.clearScreen()
})
basic.forever(function on_forever() {
    
})

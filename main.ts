input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(1)
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(3)
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showNumber(4)
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(2)
    basic.pause(200)
    basic.clearScreen()
})
basic.forever(function () {
	
})

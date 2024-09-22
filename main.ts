radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 0) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
    
})
input.onGesture(Gesture.LogoUp, function on_gesture_logo_up() {
    radio.sendNumber(0)
})
input.onGesture(Gesture.LogoDown, function on_gesture_logo_down() {
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.forever(function on_forever() {
    
})

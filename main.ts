let direction = 0
basic.forever(function on_forever() {
    
    direction = input.compassHeading()
    if (direction < 45 && direction > 0 || direction >= 315) {
        basic.showArrow(ArrowNames.North)
    } else if (direction >= 45 && direction < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (direction >= 135 && direction < 225) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
    
})

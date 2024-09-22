let counter = 0
basic.forever(function on_forever() {
    
    if (counter < 2) {
        basic.showIcon(IconNames.Heart)
        counter = counter + 1
    } else if (counter % 2 == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        counter = counter + 1
    } else {
        basic.showIcon(IconNames.Diamond)
        counter = counter + 1
    }
    
    basic.pause(1000)
})

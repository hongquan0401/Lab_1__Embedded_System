let i = 0
basic.forever(function on_forever() {
    
    if (i == 0) {
        basic.showIcon(IconNames.Heart)
        i = 1
    } else {
        basic.showIcon(IconNames.SmallHeart)
        i = 0
    }
    
    basic.pause(500)
})

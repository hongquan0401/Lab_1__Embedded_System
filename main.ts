let i = 0
basic.forever(function () {
    if (i == 0) {
        basic.showIcon(IconNames.Heart)
        i = i + 1
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.pause(500)
})

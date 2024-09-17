let i = 0
basic.forever(function () {
    if (i == 0) {
        basic.showIcon(IconNames.Angry)
        i = 1
    } else {
        basic.showIcon(IconNames.Heart)
        i = 0
    }
    basic.pause(500)
})

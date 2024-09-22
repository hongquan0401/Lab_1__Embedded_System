i = 0

def on_forever():
    global i
    if i == 0:
        basic.show_icon(IconNames.HEART)
        i = i + 1
    else:
        basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(500)
basic.forever(on_forever)

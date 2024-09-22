counter = 0

def on_forever():
    global counter
    if counter < 2:
        basic.show_icon(IconNames.HEART)
        counter = counter + 1
    elif counter % 2 == 0:
        basic.show_icon(IconNames.SMALL_DIAMOND)
        counter = counter + 1
    else:
        basic.show_icon(IconNames.DIAMOND)
        counter = counter + 1
    basic.pause(1000)
basic.forever(on_forever)

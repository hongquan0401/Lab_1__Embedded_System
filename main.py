direction = 0

def on_forever():
    global direction
    direction = input.compass_heading()
    if direction < 45 and direction > 0 or direction >= 315:
        basic.show_arrow(ArrowNames.NORTH)
    elif direction >= 45 and direction < 135:
        basic.show_arrow(ArrowNames.EAST)
    elif direction >= 135 and direction < 225:
        basic.show_arrow(ArrowNames.SOUTH)
    else:
        basic.show_arrow(ArrowNames.WEST)
basic.forever(on_forever)

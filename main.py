def on_received_number(receivedNumber):
    if receivedNumber == 0:
        basic.show_arrow(ArrowNames.NORTH)
    else:
        basic.show_arrow(ArrowNames.SOUTH)
radio.on_received_number(on_received_number)

def on_gesture_logo_up():
    radio.send_number(0)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_logo_down():
    radio.send_number(1)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)

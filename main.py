def on_gesture_logo_up():
    basic.show_number(1)
    basic.pause(200)
    basic.clear_screen()
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    basic.show_number(3)
    basic.pause(200)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    basic.show_number(4)
    basic.pause(200)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_logo_down():
    basic.show_number(2)
    basic.pause(200)
    basic.clear_screen()
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_forever():
    pass
basic.forever(on_forever)

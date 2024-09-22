def on_gesture_tilt_left():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        . . . . #
        . . . # .
        . . . . #
        . . . . .
        """)
    basic.show_leds("""
        . . . . #
        . . . # .
        . . # . .
        . . . # .
        . . . . #
        """)
    basic.show_leds("""
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        """)
    basic.show_leds("""
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        """)
    basic.show_leds("""
        . # . . .
        # . . . .
        . . . . .
        # . . . .
        . # . . .
        """)
    basic.show_leds("""
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        """)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    basic.show_leds("""
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        # . . . .
        . # . . .
        # . . . .
        . . . . .
        """)
    basic.show_leds("""
        # . . . .
        . # . . .
        . . # . .
        . # . . .
        # . . . .
        """)
    basic.show_leds("""
        . # . . .
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        """)
    basic.show_leds("""
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        """)
    basic.show_leds("""
        . . . # .
        . . . . #
        . . . . .
        . . . . #
        . . . # .
        """)
    basic.show_leds("""
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        """)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_forever():
    pass
basic.forever(on_forever)

let 랜덤숫자 = 0
input.onButtonPressed(Button.A, function () {
    랜덤숫자 = randint(0, 2)
    if (랜덤숫자 == 0) {
        basic.showLeds(`
            # # . . #
            # # . # .
            # # # . .
            # # . # .
            # # . . #
            `)
    } else if (랜덤숫자 == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . # . #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
